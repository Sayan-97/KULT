import React from 'react'
import { FeaturedNFTs, PopularCollections, TodaysPicks, TopSeller, TrendingNFTs } from '../components/NFT Marketplace'

const MarketplacePage = () => {
  return (
    <>
        <TodaysPicks />
        <TrendingNFTs />
        <TopSeller />
        <FeaturedNFTs />
        <PopularCollections />
    </>
  )
}

export default MarketplacePage