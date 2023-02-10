import React from 'react'

import { Gradient } from '../utils'

import { HomeHeader, HomeKultOffers, HomeIGO, HomeNFTMarketplace } from '../components/Home'

const HomePage = () => {
    return (
        <>
            <HomeHeader />
            <HomeKultOffers />
            <HomeIGO />
            <HomeNFTMarketplace />
            <Gradient />
        </>
    )
}

export default HomePage