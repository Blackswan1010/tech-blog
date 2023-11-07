const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.new-post-title').value;
    const content = document.querySelector('.new-post-content').value;
    const id = document.location.pathname.split("/")[2];
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'PUT',
            body: JSON.stringify({ title, content, id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            alert('Your post was successfully updated!');
        } else {
            alert('Failed to update your post. Try again');
        }
    }
};

document.getElementById('update-post').addEventListener('click', updatePostHandler);