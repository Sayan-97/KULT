import React from 'react'

import { Gradient } from '../utils'

import { Header, KultOffers, IGO, NFTMarketplace, TopArtist } from '../components/Home'

const HomePage = () => {
    return (
        <>
            <Header />
            <KultOffers />
            <IGO />
            <NFTMarketplace />
            <TopArtist />
            <Gradient />
        </>
    )
}

export default HomePage