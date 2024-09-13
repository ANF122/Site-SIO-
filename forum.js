document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forumForm');
    const postList = document.getElementById('postList');

    // Charger les messages sauvegardés
    const loadPosts = () => {
        const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
        postList.innerHTML = posts.map(post => 
            `<div class="post">
                <strong>${post.name}</strong>
                <p>${post.message}</p>
            </div>`
        ).join('');
    };

    // Ajouter un message
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const newPost = { name, message };
        const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
        posts.push(newPost);
        localStorage.setItem('forumPosts', JSON.stringify(posts));

        form.reset();
        loadPosts();
    });

    loadPosts();
});
