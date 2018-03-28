import React from "react";

import classes from "./ProductItem.css";

const productItem = props => {

  console.log(props);

  return (
    <div className={classes.ProductItem}>
      <img className={classes.ProductItem__Image} src={props.image} alt="Blog" />
      <div
        className={classes.ProductItem__LikeSelect}
        onClick={props.onLikeToggle}>
        {/* {likeIcon} */}
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
