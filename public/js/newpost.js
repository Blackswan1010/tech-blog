const postHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('.new-post-title').value;
    const content = document.querySelector('.new-post-content').value;
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            alert('Your post was successful!');
        } else {
            alert('Failed to post. Try again');
        }
    }
};

document.getElementById('submit-new-post').addEventListener('click', postHandler);