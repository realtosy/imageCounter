import React from 'react';
import './App.css';

class SubComp extends React.PureComponent {
  render() {
    return(
      <li>
        <img src={this.props.image} alt="React logo" width="150" />
      </li>
    );
  }
}

class Gallery extends React.Component {
  render() {
    let table =[];
    let id = +Date.now();
    for (let i = 0; i < this.props.count; i++) {
      table.push(
        <SubComp key={i} image={this.props.image} />
      );
    };
    return (
      <div className="gal">
        <ul>
          {table}
			  </ul>
      </div>
      
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageCount: 1 };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState(state => ({ imageCount: ++state.imageCount }));
  }

  handleDecrease() {
    if (this.state.imageCount === 0) return;
    this.setState(state => ({ imageCount: --state.imageCount }));
  }

  render() {
    return (
      <> 
        <Gallery image={this.props.imageUrl} count={this.state.imageCount} />
        <div className="counter">{this.state.imageCount}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </>
    );
  }
}

export default App;
