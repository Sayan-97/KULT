import React, { useState } from "react";

import "./NFTMarketplace.css";

import { NFTLogo } from "../../../images";

import { motion } from "framer-motion";

import { NFTData } from "../../../utils/constants";

const NFTMarketplace = () => {
    const [ActiveFilter, setActiveFilter] = useState("Exclusive");

    // Filter NFTData based on ActiveFilter
    const filteredData = NFTData.filter((item) => item.category === ActiveFilter);

    return (
        <motion.section
            initial={{ y: "10", opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="section__nftMarketplace"
        >
            <div className="gradient-3"></div>
            <div className="gradient-4"></div>
            <div className="gradient-5"></div>
            <h1>Explore NFT Marketplace</h1>
            <p className="desc">
                Now launch your NFT Collections with just 3 Clicks. Connect, Create, &
                Publish!
            </p>
            <ul className="nft__nav">
                {["Exclusive", "Random", "Sci-Fi", "Retrowave"].map((item) => {
                    return (
                        <li
                            className={`nft__list ${ActiveFilter === item ? "list-active" : ""
                                }`}
                            onClick={() => setActiveFilter(item)}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
            <div className="nft__cardholder">
                {filteredData.map((item) => {
                    return (
                        <div className="nft__card">
                            <img src={item.nftPicture} alt="cardImg" />
                            <div className="nftcard__content">
                                <h3>{item.name}</h3>
                                <div className="card__owner">
                                    <img src={item.cardOwners.Person1} alt="img" />
                                    <img src={item.cardOwners.Person2} alt="img" />
                                    <img src={item.cardOwners.Person3} alt="img" />
                                    <span>Multiple Owners</span>
                                </div>
                                <span>Auction Time</span>
                                <span className="auction__time">{item.time}</span>
                                <div className="price">
                                    <img src={NFTLogo} alt="nftLogo" />
                                    <span>{item.price}</span>
                                </div>
                                <div className="g_top"></div>
                                <div className="g_bottom"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <motion.button initial={{ background: "var(--btn-grad)" }}>
                View More
            </motion.button>
        </motion.section>
    );
};

export default NFTMarketplace;
