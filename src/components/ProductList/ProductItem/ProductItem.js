import React from 'react';
import classes from './ProductItem.css';

const productItem = props => {
	return (
		<div className="col-xs-4">
			<div className={classes.ProductItem}>
				<img className={classes.ProductItem__Image} src={props.image} alt="Blog" />
				<div className={classes.ProductItem__LikeSelect}>
					<a onClick={props.liked}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#db4040"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
						</svg>
					</a>
				</div>

				<div className={classes.ProductItem_Top_Content}>
					<p className={classes.ProductItem_Top_Content__description}>{props.description}</p>
				</div>
			</div>
		</div>
	);
};

export default productItem;
