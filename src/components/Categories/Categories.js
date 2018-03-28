import React from 'react';

import classes from './Categories.css';

const categories = () => {
    return (
        <div className={classes.Categories}>
            <ul className={classes.Categories__List}>
                <li>New in</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Accessories</li>
                <li>Activewear</li>
                <li>Face + Body</li>
                <li>Gifts</li>
                <li>Brands</li>
                <li>Outlet</li>
                <li>Marketplace</li>
                <li>Inspiration</li>
            </ul>
        </div>
    )
}

export default categories;