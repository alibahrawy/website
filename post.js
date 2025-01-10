document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postFilename = urlParams.get('post');
    const postContent = document.getElementById('postContent');

    if (!postFilename) {
        postContent.innerHTML = '<h1>Post Not Found</h1><p>The requested post could not be found.</p>';
        return;
    }

    try {
        const response = await fetch(`posts/${postFilename}`);
        if (!response.ok) {
            throw new Error('Post not found');
        }
        
        const markdown = await response.text();
        postContent.innerHTML = marked.parse(markdown);
        
        // Update page title
        const postTitle = document.querySelector('.post-content h1');
        if (postTitle) {
            document.title = `${postTitle.textContent} - Ali Bahrawy`;
        }
    } catch (error) {
        console.error('Error loading blog post:', error);
        postContent.innerHTML = '<h1>Error</h1><p>There was an error loading the post.</p>';
    }
}); 