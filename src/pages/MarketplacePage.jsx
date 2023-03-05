import React from 'react'
import { Discover, FeaturedNFTs, PopularCollections, TodaysPicks, TopSeller, Trending, TrendingNFTs } from '../components/NFT Marketplace'

const MarketplacePage = () => {
  return (
    <>
      <Discover />
      <Trending />
      <TodaysPicks />
      <TrendingNFTs />
      <TopSeller />
      <FeaturedNFTs />
      <PopularCollections />
    </>
  )
}

export default MarketplacePage