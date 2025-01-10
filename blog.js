document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('posts/');
        const files = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(files, 'text/html');
        const mdFiles = Array.from(doc.querySelectorAll('a'))
            .filter(a => a.href.endsWith('.md'))
            .map(a => {
                // Get the raw filename from the href
                const rawFilename = decodeURIComponent(a.href.split('/').pop());
                return {
                    displayName: rawFilename.replace('.md', ''),
                    filename: rawFilename
                };
            });

        if (mdFiles.length === 0) {
            blogList.innerHTML = '<li class="blog-item"><div style="padding: 20px; color: #ffffff;">No posts available yet.</div></li>';
            return;
        }

        mdFiles.forEach(file => {
            const li = document.createElement('li');
            li.className = 'blog-item';
            
            li.innerHTML = `
                <a href="post.html?post=${file.filename}">
                    <h2>${file.displayName}</h2>
                </a>
            `;
            
            blogList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogList.innerHTML = '<li class="blog-item"><div style="padding: 20px; color: #ffffff;">Error loading posts.</div></li>';
    }
}); 