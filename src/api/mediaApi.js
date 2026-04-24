import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const callUnsplash = async (searchKeyword) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: searchKeyword},
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}`}
    })

    return(res.data.results);
}







































// import axios from 'axios';

// const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
// const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
// const KLIPPY_KEY = import.meta.env.VITE_KLIPY_KEY;


// // Fetch From Unsplash
// export const getUnsplashPhotos = async (searchKeyword) => {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//         params: {query: searchKeyword},
//         headers: {
//             Authorization: `Client-ID ${UNSPLASH_KEY}`
//         }
//     })
//     console.log(response.data);
// }

// // Fetch From Pexels
// export const getPexelsVideos = async (query) => {
//     const res = await axios.get('https://api.pexels.com/v1/videos/search', {
//         params: {query},
//         headers: {
//             Authorization: PEXELS_KEY
//         }
//     })

//     console.log(res.data);
// }

// // Fetch Gifs From Klipy
// export const getKlipyGifs = async (searchKeyword) => {
//     const res = await axios.get(`https://api.klipy.com/api/v1/${KLIPPY_KEY}/gifs/search`, {
//         params: {q: searchKeyword},
//         headers: {'Content-Type': 'application/json'}
//     })
//     console.log(res.data);
// }