import React, {Component} from "react";

import classes from "./Modal.css";
import Utility from "./../../../hoc/Utility/Utility";
import Backdrop from "./../Backdrop/Backdrop";

class Modal extends Component {

  // Only updates if show changes to avoid re-render
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log('[Modal] Will update');
  }

  render() {
    return (
      <Utility>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"}}>
          {this.props.children}
        </div>
      </Utility>
    );
  }
}

export default Modal;
