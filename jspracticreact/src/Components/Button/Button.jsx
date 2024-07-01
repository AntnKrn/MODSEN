import React from "react";

export class Button extends React.Component {
  state = {
    isShow: true,
  };

  onClickButtonHandler = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };
  render() {
    return (
      <button onClick={this.onClickButtonHandler}>
        {this.state.isShow ? "Show" : "Hide"}{" "}
      </button>
    );
  }
}
