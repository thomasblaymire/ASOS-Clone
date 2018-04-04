import React from "react";

import classes from "./ProductItem.css";

import like from '../../../assets/images/icons/SVG/heart.svg';

const productItem = props => {

  console.log(like);

  return (
    <div className={classes.ProductItem}>
      <img className={classes.ProductItem__Image} src={props.image} alt="Blog" />
      <div className={classes.ProductItem__LikeSelect} onClick={props.onLikeToggle}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <title>heart</title>
        <path d="M12.5 4c1.378 0 2.5 1.346 2.5 3 0 3.154-3.818 5.713-6 6.8-2.184-1.089-6-3.647-6-6.8 0-1.654 1.122-3 2.5-3 0.643 0 1.347 0.44 1.883 1.177l0.809 0.886c0.399 0.549 1.218 0.549 1.617 0l0.809-0.886c0.536-0.737 1.24-1.177 1.883-1.177zM12.5 2c-1.415 0-2.675 0.866-3.5 2-0.825-1.134-2.085-2-3.5-2-2.485 0-4.5 2.239-4.5 5 0 5.719 8 9 8 9s8-3.281 8-9c0-2.761-2.015-5-4.5-5v0z"></path>
        </svg>
      </div>

      <div className={classes.ProductItem_Top_Content}>
        <p className={classes.ProductItem_Top_Content__description}>
          {props.description}
        </p>

      </div>
    </div>
  );
};

export default productItem;
