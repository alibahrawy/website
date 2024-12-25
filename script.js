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

    // Count visible videos for debugging
    let visibleCount = 0;

    // Show/hide videos
    videos.forEach(video => {
        const category = video.getAttribute('data-category');
        if (filter === 'all') {
            video.style.display = 'block';
            visibleCount++;
        } else {
            if (category === filter) {
                video.style.display = 'block';
                visibleCount++;
            } else {
                video.style.display = 'none';
            }
        }
    });

    // Debug log
    console.log('Visible videos: ' + visibleCount);

    // Reorganize videos into rows
    reorganizeVideos();
}

function reorganizeVideos() {
    // Get all video rows
    const rows = document.querySelectorAll('.video-row');
    
    // Get all visible videos
    const visibleVideos = Array.from(document.querySelectorAll('.video-container')).filter(
        video => video.style.display !== 'none'
    );

    // Move all visible videos to the first row
    if (rows.length > 0) {
        const firstRow = rows[0];
        visibleVideos.forEach(video => {
            firstRow.appendChild(video);
        });

        // Hide empty rows
        rows.forEach((row, index) => {
            if (index > 0) {
                row.style.display = 'none';
            }
        });
    }
}

// Initial load - show all videos
window.onload = function() {
    console.log('Page loaded - initializing filters');
    filterVideos('all');
}; 