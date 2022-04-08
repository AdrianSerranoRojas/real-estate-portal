import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./PropertieCard.scss";

function Divider() {
  return <hr className="PropertieCard__divider" />;
}

// function getPopularityClasses(
//   currentValue,
//   limit,
//   prevClasses,
//   popularityClassName
// ) {
//   const halfLimit = Math.floor(limit / 2);

//   if (currentValue >= halfLimit) {
//     return `${prevClasses} ${popularityClassName}`;
//   }

//   return prevClasses;
// }

function PropertieCard({id, description, img, city, ...props}) {
  // function onSetFavorite() {
  //   handleSetFavorite(id);
  // }

  return (
    <article className="PropertieCard col col-12 col-md-6 col-lg-4">
      <header>
        <div className="PropertieCard__image-wrapper">
          <img src={img} className="PropertieCard__image" alt={description} />
          {/* <FavoriteIconButton
            handleSetFavorite={onSetFavorite}
            isFavorite={isFavorite}
          /> */}
        </div>
        <h2 className="PropertieCard__title">{description}</h2>
      </header>
      <Divider />
      <p className="PropertieCard__description">{city}</p>
      <Divider />
      {/* <footer className="PropertieCard__meta">
        <div className="PropertieCard__icons">
          <div className="PropertieCard__icon-row">
            <IconButton aria-label="up vote product" handleClick={onUpVote}>
              <ThumbUp />
            </IconButton>
            <p
              className={getPopularityClasses(
                upVotes.currentValue,
                upVotes.upperLimit,
                "PropertieCard__icon-txt",
                "PropertieCard__icon-popular"
              )}
            >
              {upVotes.currentValue}
            </p>
          </div>
          <div className="PropertieCard__icon-row">
            <IconButton aria-label="down vote product" handleClick={onDownVote}>
              <ThumbDown />
            </IconButton>
            <p
              className={getPopularityClasses(
                downVotes.currentValue,
                downVotes.lowerLimit,
                "PropertieCard__icon-txt",
                "PropertieCard__icon-unpopular"
              )}
            >
              {downVotes.currentValue}
            </p>
          </div>
        </div>
        <div className="PropertieCard__icon-row">
          <Button onClick={onAddToCart}>Add to cart</Button>
        </div>
      </footer> */}
    </article>
  );
}

export default PropertieCard;
