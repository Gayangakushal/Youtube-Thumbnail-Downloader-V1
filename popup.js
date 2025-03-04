document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentUrl = tabs[0].url;
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    
    if (!youtubeRegex.test(currentUrl)) {
      document.getElementById('youtube-content').style.display = 'none';
      document.getElementById('not-youtube').style.display = 'block';
      return;
    }
    
    const downloadBtn = document.getElementById('download-btn');
    const messageDiv = document.getElementById('message');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const qualitySelector = document.getElementById('quality-selector');
    
    // Function to extract video ID from YouTube URL
    function extractVideoId(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[7].length === 11) ? match[7] : false;
    }
    
    // Function to download the thumbnail
    function downloadThumbnail(videoId, quality) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
      
      // Fetch the image first to check if it exists
      fetch(thumbnailUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Thumbnail quality not available');
          }
          return response.blob();
        })
        .then(blob => {
          // Create a preview of the thumbnail
          const img = document.createElement('img');
          img.src = URL.createObjectURL(blob);
          img.className = 'thumbnail-image';
          
          // Clear the container first
          thumbnailContainer.innerHTML = '';
          thumbnailContainer.appendChild(img);
          
          // Create an anchor element for downloading
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = `youtube-thumbnail-${videoId}-${quality}.jpg`;
          document.body.appendChild(downloadLink);
          
          // Trigger download and clean up
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
          messageDiv.textContent = "Thumbnail downloaded successfully!";
        })
        .catch(error => {
          console.error('Error:', error);
          messageDiv.textContent = "This quality is not available. Try another quality.";
        });
    }
    
    downloadBtn.addEventListener('click', function() {
      const videoId = extractVideoId(currentUrl);
      if (videoId) {
        messageDiv.textContent = "Downloading...";
        const quality = qualitySelector.value;
        downloadThumbnail(videoId, quality);
      } else {
        messageDiv.textContent = "Could not extract video ID. Please make sure you're on a YouTube video page.";
      }
    });
  });
});