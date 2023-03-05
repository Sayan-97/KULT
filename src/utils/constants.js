import { NFTCardImg1, NFTCardImg2, NFTCardImg3, NFTCardImg4, NFTCardImg5, NFTCardImg6 } from '../images'

import { Person1, Person2, Person3 } from '../images'

import { KultIGOImg1, KultIGOImg2, KultIGOImg3, KultIGOImg4, KultIGOImg5, KultIGOImg6, KultIGOImg7, KultIGOImg8, KultIGOImg9 } from '../images'

import { GamePic1, GamePic2, GamePic3, GamePic4, GamePic5, GamePic6 } from '../images'

import { artist1, artist2, artist3, artist4, artistImg1, artistImg2, artistImg3, artistImg4 } from '../images'

const NFTData = [
    {
        nftPicture: NFTCardImg1,
        name: 'Stoned',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },
    {
        nftPicture: NFTCardImg2,
        name: 'Mystic Island',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },
    {
        nftPicture: NFTCardImg3,
        name: 'Cyberpunk Metaverse',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },
    {
        nftPicture: NFTCardImg4,
        name: 'Heaven Platform',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },
    {
        nftPicture: NFTCardImg5,
        name: 'Metachicks',
        cardOwners: [
            { imgUrl: Person1 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },
    {
        nftPicture: NFTCardImg6,
        name: 'Roll Meta',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Exclusive'
    },

    {
        nftPicture: NFTCardImg6,
        name: 'Roll Meta',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Random'
    },
    {
        nftPicture: NFTCardImg5,
        name: 'Metachicks',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Random'
    },
    {
        nftPicture: NFTCardImg4,
        name: 'Heaven Platform',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Random'
    },
    {
        nftPicture: NFTCardImg2,
        name: 'Mystic Island',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Random'
    },

    {
        nftPicture: NFTCardImg2,
        name: 'Mystic Island',
        cardOwners: [
            { imgUrl: Person1 },
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Retrowave'
    },
    {
        nftPicture: NFTCardImg3,
        name: 'Cyberpunk Metaverse',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Retrowave'
    },
    {
        nftPicture: NFTCardImg4,
        name: 'Heaven Platform',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Retrowave'
    },
    {
        nftPicture: NFTCardImg5,
        name: 'Metachicks',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Retrowave'
    },
    {
        nftPicture: NFTCardImg6,
        name: 'Roll Meta',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Retrowave'
    },
    {
        nftPicture: NFTCardImg3,
        name: 'Shark Hero',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Sci-Fi'
    },
    {
        nftPicture: NFTCardImg6,
        name: 'Inner Peace',
        cardOwners: [
            { imgUrl: Person1 },
            { imgUrl: Person2 },
            { imgUrl: Person3 }
        ],
        time: '3h 1m 50s',
        price: '0.13 ETH',
        category: 'Sci-Fi'
    }
]


const IGOData = [
    {
        igoImage: KultIGOImg1,
        title: `Genesis Sharks Mystery Box`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg2,
        title: `Grand Theft Auto`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg3,
        title: `Fire Drago's Roaring Thunder`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg4,
        title: `Robowars Genesis Ultimate Edition`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg5,
        title: `Age of Kids Sarcasm Edition`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg6,
        title: `Valorant Metastyle Commander`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg7,
        title: `Tiny World Huge Adventure`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg8,
        title: `Alen Walker Origins`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },
    {
        igoImage: KultIGOImg9,
        title: `God of War-Kratos Rebirth`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ongoing'
    },

    {
        igoImage: KultIGOImg3,
        title: `Fire Drago's Roaring Thunder`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg4,
        title: `Robowars Genesis Ultimate Edition`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg5,
        title: `Age of Kids Sarcasm Edition`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg6,
        title: `Valorant Metastyle Commander`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg7,
        title: `Tiny World Huge Adventure`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg8,
        title: `Alen Walker Origins`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },
    {
        igoImage: KultIGOImg9,
        title: `God of War-Kratos Rebirth`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Upcoming'
    },

    {
        igoImage: KultIGOImg5,
        title: `Age of Kids Sarcasm Edition`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ended'
    },
    {
        igoImage: KultIGOImg6,
        title: `Valorant Metastyle Commander`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ended'
    },
    {
        igoImage: KultIGOImg7,
        title: `Tiny World Huge Adventure`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ended'
    },
    {
        igoImage: KultIGOImg8,
        title: `Alen Walker Origins`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ended'
    },
    {
        igoImage: KultIGOImg9,
        title: `God of War-Kratos Rebirth`,
        desc: `Check out the Top Live Artists of the week. With the right amount of care and garnish, you can be featured on our front page as well!`,
        t_vol: '388489 ETH',
        fp: '789 ETH',
        sp: '599 USD',
        t_units: '10000',
        category: 'Ended'
    },
]


const UpcomingIGOData = [
    {
        image: 'data:image/jpeg;base64,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',
        name: 'The legends of Elysium',
        countDown: '05:08:46'
    },
    {
        image: GamePic2,
        name: 'Chain of Alliance',
        countDown: '05:08:46'
    },
    {
        image: GamePic3,
        name: 'Whisper of Soul',
        countDown: '05:08:46'
    },
    {
        image: GamePic4,
        name: 'Rage Effect',
        countDown: '05:08:46'
    },
    {
        image: GamePic5,
        name: 'Occupy Wallstreet',
        countDown: '05:08:46'
    },
    {
        image: GamePic6,
        name: 'The legends of Elysium',
        countDown: '05:08:46'
    },
]

const topArtist = [
    {
        image: artistImg1,
        artistPic: artist1,
        name: 'John Doe',
        number: '#47'
    },
    {
        image: artistImg2,
        artistPic: artist2,
        name: 'Mika Sins',
        number: '#34'
    },
    {
        image: artistImg3,
        artistPic: artist3,
        name: 'Michal Doe',
        number: '#17'
    },
    {
        image: artistImg4,
        artistPic: artist4,
        name: 'Carl John',
        number: '#89'
    }
]


const topCollections = [
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
    {
        image: artist2,
        name: 'Robert Fox',
        number: '#377'
    },
]

const FAQs = [
    {
        question: 'How can one join IGOs and INOs?',
        answer: 'Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.'
    },
    {
        question: 'What does IGO and INO mean?',
        answer: 'Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.'
    },
    {
        question: 'How can one play Games?',
        answer: 'Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.'
    },
]

export {
    NFTData,
    IGOData,
    UpcomingIGOData,
    topArtist,
    topCollections,
    FAQs
}