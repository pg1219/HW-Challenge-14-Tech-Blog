const newCommentHandler = async (event) {
    event.preventDefault();

    const commentId = document.querySelector('.new-comment-form').dataset.post_id;
    const commentBody = document.querySelector('#comment-body').value.trim();

    if (commentId && commentBody) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ commentId, commentBody }),
            headers: {
                'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        document.location.reload();
        }
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler)
