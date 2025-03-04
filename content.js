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
        
        // Create a preview of the thumbnail
        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.className = 'thumbnail-image';
        img.onerror = function() {
          messageDiv.textContent = "This quality is not available. Try another quality.";
          img.style.display = 'none';
        };
        
        img.onload = function() {
          // Clear the container first
          thumbnailContainer.innerHTML = '';
          thumbnailContainer.appendChild(img);
          
          // Create download link
          const downloadLink = document.createElement('a');
          downloadLink.href = thumbnailUrl;
          downloadLink.download = `youtube-thumbnail-${videoId}-${quality}.jpg`;
          
          // Simulate click to download
          downloadLink.click();
          
          messageDiv.textContent = "Thumbnail downloaded successfully!";
        };
      }
      
      downloadBtn.addEventListener('click', function() {
        const videoId = extractVideoId(currentUrl);
        if (videoId) {
          const quality = qualitySelector.value;
          downloadThumbnail(videoId, quality);
        } else {
          messageDiv.textContent = "Could not extract video ID. Please make sure you're on a YouTube video page.";
        }
      });
    });
  });