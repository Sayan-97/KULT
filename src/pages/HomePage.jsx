import React from 'react'

import { Header, KultOffers, UpcomingIGO, NFTMarketplace, TopArtist, Collection, KultIGO, JoinKult, OurTeam, FAQ } from '../components/Home'
import { FooterLines, LinesBg, Mountains } from '../utils'

const HomePage = () => {
    return (
        <>
            <Mountains />
            <LinesBg />
            <Header />
            <KultOffers />
            <UpcomingIGO />
            <NFTMarketplace />
            <TopArtist />
            <Collection />
            <KultIGO />
            <JoinKult />
            <OurTeam />
            <FAQ />
            <FooterLines />
        </>
    )
}

export default HomePage