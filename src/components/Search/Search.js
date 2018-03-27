import React, { Component } from "react";

// import allIcons from "../../assets/images/icons/sprite.svg";

import classes from "./Search.css";

class Search extends Component {

  handleChange = event => {
    console.log("input value is" + event.target.value);
  };

  render() {
    return (
      <div>
        <form action="#" className={classes.Search}>
          <input
            onChange={this.handleChange.bind(this)}
            type="text"
            className={classes.Search__input}
            placeholder="Search the lastest fashion trends..."
          />
          

          {/* <Button btnType="Search">
            <svg className={classes.Search__icon}>
              <use xlinkHref={`${allIcons}#icon-search`} />
            </svg>
          </Button>  */}
        </form>
      </div>
    );
  }
}

export default Search;
