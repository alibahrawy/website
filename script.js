document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const videoContainers = document.querySelectorAll('.video-container');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            videoContainers.forEach(container => {
                if (filterValue === 'all') {
                    container.classList.remove('hidden');
                } else {
                    if (container.getAttribute('data-category') === filterValue) {
                        container.classList.remove('hidden');
                    } else {
                        container.classList.add('hidden');
                    }
                }
            });
        });
    });
}); 