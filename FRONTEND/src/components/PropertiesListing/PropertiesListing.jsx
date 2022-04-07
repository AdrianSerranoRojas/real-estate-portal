import React from "react";

import PropertieCard from "../PropertieCard";

function PropertiesListing({
  products,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
  ...props
}) {
  return (
    <section className="row" {...props}>
      {products.map((product) => (
        <PropertieCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          handleUpVote={handleUpVote}
          downVotes={product.votes.downVotes}
          handleDownVote={handleDownVote}
          isFavorite={product.isFavorite}
          handleSetFavorite={handleSetFavorite}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
}

export default PropertiesListing;
