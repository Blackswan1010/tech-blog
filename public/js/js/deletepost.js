const deletePostHandler = async (event) => {
    event.preventDefault();
    const id = document.location.pathname.split("/")[2];
    const response = await fetch(`/api/posts`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert(`The post is deleted!`);
        document.location.replace('/dashboard');
    } else {
        alert(`Post couldn't be deleted, please try again`)
    }
};

document.getElementById('delete-post').addEventListener('click', deletePostHandler);