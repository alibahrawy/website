// Simple version to test functionality
document.addEventListener('DOMContentLoaded', function() {
    // Test log to confirm script is running
    console.log('Script is running');

    // Get all elements
    const buttons = document.querySelectorAll('.filter-button');
    const videos = document.querySelectorAll('.video-container');

    // Log what we found
    console.log('Found ' + buttons.length + ' buttons');
    console.log('Found ' + videos.length + ' videos');

    // Add click event to each filter button
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Log which button was clicked
            console.log('Clicked: ' + this.getAttribute('data-filter'));

            // Remove active class from all buttons
            buttons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter videos
            videos.forEach(video => {
                const category = video.getAttribute('data-category');
                console.log('Video category:', category);

                if (filterValue === 'all') {
                    video.style.display = '';
                } else {
                    video.style.display = (category === filterValue) ? '' : 'none';
                }
            });
        });
    });
}); 