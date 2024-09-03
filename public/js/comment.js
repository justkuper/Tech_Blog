const postComment = async (event) => {
    event.preventDefault();
   const blogId = document.querySelector('#textarea1').getAttribute('data-blogId');
   console.log(blogId);
    const comment = document.querySelector('#textarea1').value.trim();
//    console.log(comment);
    if (comment && blogId) {
        const response = await fetch('/api/comments/post', {
            method: 'POST',
            body: JSON.stringify({ comment, blogId }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            // document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }   
}   

const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', postComment);