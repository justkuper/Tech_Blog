document.addEventListener('DOMContentLoaded', () => {
    const updatePost = async (event) => {
        event.preventDefault();

        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#textarea1').value.trim();
        const id = document.querySelector('#btn').getAttribute('data-id');

        if (title && content && id) {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to update post');
            }
        }
    }

    const btn = document.querySelector('#btn');
    if (btn) {
        btn.addEventListener('click', updatePost);
    } else {
        console.error('Button with class "btn" not found.');
    }
});