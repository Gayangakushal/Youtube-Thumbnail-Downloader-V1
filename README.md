# YouTube Thumbnail Downloader

A simple Chrome extension to download YouTube video thumbnails in various qualities with just one click.

## Features

- **Download YouTube Thumbnails:** Easily download thumbnails from any YouTube video.
- **Multiple Quality Options:** Choose from various thumbnail qualities:
    - Maximum Resolution (`maxresdefault`)
    - Standard Definition (`sddefault`)
    - High Quality (`hqdefault`)
    - Medium Quality (`mqdefault`)
- **User-Friendly Interface:** Simple and intuitive popup for quick downloads.
- **Image Preview:** Shows a preview of the thumbnail before/after downloading.
- **Direct Download:** Downloads the thumbnail directly to your computer.
- **Works on Active Tab:** Detects if you are on a YouTube video page.

## Installation

1. **Download or Clone the Repository:**
   - Download the ZIP file of this repository and unzip it, or clone the repository to your local machine using Git.
2. **Open Chrome Extensions Page:**
   - Open Google Chrome, type `chrome://extensions` in the address bar, and press Enter.
3. **Enable Developer Mode:**
   - In the top right corner of the Extensions page, toggle the "Developer mode" switch to the on position.
4. **Load Unpacked Extension:**
   - Click the "Load unpacked" button that appears.
   - Navigate to the directory where you downloaded or cloned the repository (the folder containing `manifest.json`).
   - Select the folder and click "Select Folder".
5. **Extension Ready:**
   - The YouTube Thumbnail Downloader extension should now be installed and visible in your Chrome extensions list. You can pin it to your toolbar for easy access.

## How to Use

1. **Navigate to a YouTube Video:**
   - Open any video on YouTube.
2. **Open the Extension:**
   - Click on the YouTube Thumbnail Downloader extension icon in your Chrome toolbar.
3. **Select Thumbnail Quality:**
   - A popup will appear. Use the dropdown menu to select your desired thumbnail quality (e.g., Maximum Resolution, Standard Definition, High Quality, Medium Quality).
4. **Download the Thumbnail:**
   - Click the "Download Thumbnail" button.
5. **Save the Image:**
   - The thumbnail image will be displayed in the popup and a download will start automatically. Save the image to your desired location.
6. **Messages:**
   - The extension will display messages like "Downloading..." or "Thumbnail downloaded successfully!".
   - If you are not on a YouTube video page, it will show a message asking you to navigate to one.
   - If a specific quality is not available for a video, a message will indicate that, and you can try a different quality.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or find any bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Permissions

This extension requires the following permissions:

- **`activeTab`**: This permission is used to get the URL of the current active tab. The extension needs this to check if you are on a YouTube video page and to extract the video ID from the URL. The extension only accesses tab information when its icon is clicked.
- **`scripting`**: This permission is needed to execute scripts that facilitate the thumbnail download process and interact with the YouTube page content (though current `popup.js` handles logic primarily within the popup, this permission is good practice for future enhancements if interaction with the page itself becomes necessary). 

We prioritize your privacy and only request permissions essential for the extension's functionality.

## Future Improvements

- Option to choose custom filenames for downloaded thumbnails.
- Support for downloading thumbnails from YouTube playlists.
- Localization into other languages.
