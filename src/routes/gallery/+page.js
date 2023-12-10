/** @type {import('./$types').PageLoad} */
export async function load() {

    // async function getImages() {
    //     const res = await fetch(`https://picsum.photos/v2/list?page&limit=10`);
    //     const data = await res.json();
    //     console.log(data);
    //     return data;
    // }

    // let imagesList = getImages();
    const images = [
        {
            alt: 'Cosmic timetraveler',
            src: 'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g',
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        },
        {
            alt: 'Cristina Gottardi',
            src: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I',
            title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
        },
    ];
    return {
        images
    };
}