function filterVideos(filter) {
    // Debug log
    console.log('Filtering for: ' + filter);

    // Get all buttons and videos
    const buttons = document.querySelectorAll('.filter-button');
    const videos = document.querySelectorAll('.video-container');

    // Update active button
    buttons.forEach(button => {
        if (button.innerText.toLowerCase() === filter.toLowerCase() || 
           (button.innerText === 'All' && filter === 'all')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Show/hide videos
    videos.forEach(video => {
        const category = video.getAttribute('data-category');
        if (filter === 'all') {
            video.style.display = 'block';
        } else {
            video.style.display = category === filter ? 'block' : 'none';
        }
        // Debug log
        console.log('Video category:', category, 'Display:', video.style.display);
    });
}

// Initial load - show all videos
window.onload = function() {
    console.log('Page loaded - initializing filters');
    filterVideos('all');
}; 