export interface PortfolioPieceProps {
    name: string;
    year: number;
    coverImage: string;
}

import defaultImage from './images/flower.jpeg'

import makeupCover from './images/ulta_phone.png'
import yogaCover from './images/yoga_phone.png'
import sodaCover from './images/FavoriteDaySodaGroupFront.png'
// import audioSlideshowCover from './images/'
// import magazineCover from './images/'
// import gastraCover from './images/'
// import cupacakeCover from './images/'
// import transinclusiveCover from './images/'


export const projects: PortfolioPieceProps[] = [
    {
        name: "Makeup Icons & Ulta Rebrand",
        year: 2024,
        coverImage: makeupCover
    },
    {
        name: "Soul Sync: A Yoga App",
        year: 2024,
        coverImage: yogaCover
    },
    {
        name: "Favorite Day Soda Rebrand",
        year: 2024,
        coverImage: sodaCover
    },
    {
        name: "Finding Sisterhood Through Diversity - Audio Slideshow",
        year: 2025,
        coverImage: defaultImage
    },
    {
        name: "Phoenix Fashion - The Magazine",
        year: 2024,
        coverImage: defaultImage
    },
    {
        name: "GASTRA - Cocktail Festival",
        year: 2024,
        coverImage: defaultImage
    },
    {
        name: "Cupcake Amour",
        year: 2024,
        coverImage: defaultImage
    },
    {
        name: "Transinclusive Group Website Rebrand",
        year: 2024,
        coverImage: defaultImage
    }
]