import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  delete = (id) => {
    const updcounters = this.state.counters.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counters: updcounters });
  };
  handle = () => {};
  render() {
    return (
      <div>
        <button className="btn btn-dark btn-sm m-3" onClick={this.handle}>
          Reset{" "}
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.delete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
