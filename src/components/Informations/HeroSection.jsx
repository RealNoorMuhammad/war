import React from "react";

const HeroSection = () => {
  return (
    <div className="p-5  bg-imagew">
      <div className="sections">
        <div className="firstLayer ">
          <div
            className="mHead pt-5"
            style={{
              display: "flex",
            }}
          >
            <p style={{}}>WE ARE WARLAND</p>
          </div>
          <div
            className="mHeadx pt-5"
            style={{
              display: "flex",
            }}
          >
            <p style={{}}>
              Solana NFT, MMORPG game project Staking, DAO, CASINO, WAR TOKEN
              METAVERSE CLUB We are focused and working hard on developing the
              best gaming enviroment experience, different combat modes,
              utilities and resources. Our collection has 2222 unique swords
              that were made on solana blockchain. Things like free membership
              in the WarLand game, staking and access to the metaverse club it
              is also available but only for holders. Later we will offer to our
              holders a possibility to upgrade their swords in order to reduce
              the supply. We are doxxed dedicated team
            </p>
          </div>

          <a class="btn-slice" href="https://swords.warlandnft.art/">
            <span
              style={{
                fontSize: "19px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Mint Swords
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
