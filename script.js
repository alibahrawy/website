// Store all videos in their original order
let originalVideos = [];

document.addEventListener('DOMContentLoaded', () => {
    // Store original video order on load
    originalVideos = Array.from(document.querySelectorAll('.video-container'));
    
    // Add click handlers to filter buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            filterVideos(category);
            
            // Update active button state
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.toggle('active', btn === button);
            });
        });
    });

    // Initial filter
    filterVideos('all');
});

function filterVideos(category) {
    const firstRow = document.querySelector('.video-row');
    if (!firstRow) return;

    // Clear the first row
    firstRow.innerHTML = '';
    
    // Filter and append videos
    originalVideos.forEach(video => {
        const clone = video.cloneNode(true);
        const categories = video.dataset.category.split(' ');
        
        if (category === 'all' || categories.includes(category)) {
            firstRow.appendChild(clone);
        }
    });

    // Hide other rows
    document.querySelectorAll('.video-row').forEach((row, index) => {
        if (index > 0) {
            row.style.display = 'none';
        }
    });

    // Reinitialize lite-youtube elements
    initializeLiteYouTube();
}

function initializeLiteYouTube() {
    document.querySelectorAll('lite-youtube').forEach(element => {
        // Remove any existing initialized attribute
        element.removeAttribute('initialized');
        
        // Force re-initialization
        if (customElements.get('lite-youtube')) {
            customElements.upgrade(element);
        }
    });
}
