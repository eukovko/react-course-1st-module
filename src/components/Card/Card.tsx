import React from "react";
import "./style.css";

export default class Card extends React.Component<{ name: string }, never> {
  render() {
    return (
      <>
        <div className={"Card"}>
          <h1>{this.props.name}</h1>
        </div>
      </>
    );
  }
}
