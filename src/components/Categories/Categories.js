import React from 'react';

import classes from './Categories.css';
import Utility from './../../hoc/Utility';

const categories = () => {
    return (
        <Utility>
            <span className={classes.Categories__Bar}></span>
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
        </Utility>

    )
}

export default categories;