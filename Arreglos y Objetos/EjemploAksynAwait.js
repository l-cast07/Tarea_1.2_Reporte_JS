async function obtenerPostsConAsyncAwait() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la llamada a la API');
        }
        let posts = await response.json();
        console.log('Posts obtenidos:', posts);
    } catch (error) {
        console.log('Error:', error);
    }
}

obtenerPostsConAsyncAwait();