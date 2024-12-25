// Simple version to test functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons and videos
    const buttons = document.querySelectorAll('.filter-button');
    const videos = document.querySelectorAll('.video-container');

    // Add click handlers to each button
    buttons.forEach(function(button) {
        button.onclick = function() {
            // Get the filter value from the clicked button
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Filter the videos
            videos.forEach(function(video) {
                if (filter === 'all') {
                    video.style.display = 'block';
                } else {
                    if (video.getAttribute('data-category') === filter) {
                        video.style.display = 'block';
                    } else {
                        video.style.display = 'none';
                    }
                }
            });
        };
    });
}); 