import React from 'react'

import { Gradient } from '../utils'

import { Header, KultOffers, IGO, NFTMarketplace } from '../components/Home'

const HomePage = () => {
    return (
        <>
            <Header />
            <KultOffers />
            <IGO />
            <NFTMarketplace />
            <Gradient />
        </>
    )
}

export default HomePage