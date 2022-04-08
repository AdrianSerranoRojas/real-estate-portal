import React from "react";
import { useSelector } from "react-redux";

import PropertieCard from "../PropertieCard";

function PropertiesListing({ ...props }) {
  const { realProperties } = useSelector((state) => state.search);
  console.log(realProperties);

  return (
    <section className="row" {...props}>
      {realProperties.map((realPropertie) => (
        <PropertieCard
          key={realPropertie.id}
          id={realPropertie.id}
          description={realPropertie.description}
          city={realPropertie.city}
          img={realPropertie.img}
          // upVotes={realPropertie.votes.upVotes}
          // handleUpVote={handleUpVote}
          // downVotes={realPropertie.votes.downVotes}
          // handleDownVote={handleDownVote}
          // isFavorite={realPropertie.isFavorite}
          // handleSetFavorite={handleSetFavorite}
          // handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
}

export default PropertiesListing;
