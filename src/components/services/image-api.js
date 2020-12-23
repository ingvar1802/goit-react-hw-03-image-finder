const KEY = '19027905-98233d65311b3fd13bc0a1406';
async function fetchImage(searchName, page) {
    const response = await fetch(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`No images`));
}

export default fetchImage ;

