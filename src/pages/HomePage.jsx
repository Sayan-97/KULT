import React from 'react'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeIGO from '../components/HomeIGO/HomeIGO'
import HomeKultOffers from '../components/HomeKultOffers/HomeKultOffers'
import HomeNFTMarketplace from '../components/HomeNFTMarketplace/HomeNFTMarketplace'

const HomePage = () => {
    return (
        <>
            <HomeHeader />
            <HomeKultOffers />
            <HomeIGO />
            <HomeNFTMarketplace />
        </>
    )
}

export default HomePage