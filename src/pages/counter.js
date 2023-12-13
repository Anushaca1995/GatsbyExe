import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: this.props.color,
        }}
      >
        <h1>Hello Class Component</h1>
        <p>Current Count: {this.state.count}</p>
        <div>
          <button
            style={{ width: 50, margin: 20, fontSize: 20 }}
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <button
            style={{ width: 50, margin: 20, fontSize: 20 }}
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </div>
        <Link style={{ fontSize: 20, textDecoration: "none" }} to="/">
          Go Home
        </Link>
      </div>
    );
  }
}

export default Counter;
