function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => displayPost(post))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML =
        `
            <h4>user-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    }
}
loadPost()

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'DELETE'});
}