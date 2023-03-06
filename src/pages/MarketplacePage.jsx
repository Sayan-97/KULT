import React from 'react'
import { Discover, NotableCollections, TopCollections, Trending } from '../components/NFT Marketplace'

const MarketplacePage = () => {
  return (
    <>
      <Discover />
      <Trending />
      <TopCollections />
      <NotableCollections />
    </>
  )
}

export default MarketplacePage