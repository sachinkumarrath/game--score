import React, { Component, PureComponent } from "react";

export default class PureComponentTest extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // incrementCounter () {

  // }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>
          Count {this.state.count}
        </button>
        <PureChild1 />
        <Child1 />
      </div>
    );
  }
}

class PureChild1 extends PureComponent {
  render() {
    console.log("Pure Child1 rendered");
    return (
      <div>
        <span>Pure Child1</span>
        <Child2 />
      </div>
    );
  }
}

class Child1 extends Component {
  render() {
    console.log("Child1 rendered");
    return (
      <div>
        <span>Component Child1</span>
        <Child2 />
        <MemoizedChild2 />
      </div>
    );
  }
}

function Child2() {
  console.log("Child2 rendered");
  return (
    <div>
      <span>Child2</span>
      <Child3 />
    </div>
  );
}

const MemoizedChild2 = React.memo(Child2);

function Child3() {
  console.log("Child3 rendered");
  return <div>Child 3</div>;
}
