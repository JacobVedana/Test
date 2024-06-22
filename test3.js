document.addEventListener('DOMContentLoaded', () => {
    const commentInput = document.getElementById('comment-input');
    const postCommentBtn = document.getElementById('post-comment-btn');
    const commentsList = document.getElementById('comments-list');

    // Load comments from local storage on page load
    loadComments();

    postCommentBtn.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const comment = {
                author: 'Anonymous',  // You can extend this to take user input for author
                time: new Date().toLocaleString(),
                content: commentText
            };
            saveComment(comment);
            addCommentToDOM(comment);
            commentInput.value = '';  // Clear the input field
        }
    });

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => addCommentToDOM(comment));
    }

    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function addCommentToDOM(comment) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        const commentAuthor = document.createElement('div');
        commentAuthor.classList.add('comment-author');
        commentAuthor.textContent = comment.author;
        
        const commentTime = document.createElement('div');
        commentTime.classList.add('comment-time');
        commentTime.textContent = comment.time;
        
        const commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');
        commentContent.textContent = comment.content;
        
        commentDiv.appendChild(commentAuthor);
        commentDiv.appendChild(commentTime);
        commentDiv.appendChild(commentContent);
        
        commentsList.appendChild(commentDiv);
    }
});