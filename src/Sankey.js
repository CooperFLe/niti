import React from 'react';
import { Chart } from "react-google-charts";
import './App.css';

const options = {};

class Sankey extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [
          ["From", "To", "Weight"],
          ["A", "X", 0]
        ],
        from: '', to: '', weight: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h3>Niti Dashboard</h3>
        <Chart
          chartType="Sankey"
          width="60%"
          height="300px"
          data={this.state.data}
          options={options}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="flow-from">
            From
          </label>
          <input
            id="flow-from"
            name="from"
            onChange={this.handleChange}
            value={this.state.from}
          />
          <label htmlFor="flow-to">
            To
          </label>
          <input
            id="flow-to"
            name="to"
            onChange={this.handleChange}
            value={this.state.to}
          />
          <label htmlFor="flow-weight">
            Amount
          </label>
          <input
            id="flow-weight"
            name="weight"
            onChange={this.handleChange}
            value={this.state.weight}
          />
          <button>
            Add #{this.state.data.length -1}
          </button>
        </form>
        </header>
        <div className="footer">
          <p>
            Inspired by <a className="App-link" href="https://github.com/TylerTalks/data_visualization" target="_blank" rel="noopener noreferrer">finance_sankey</a>
          </p>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.from || !this.state.to || !this.state.weight) {
      return;
    }
    const newItem = [this.state.from, this.state.to, this.state.weight];
    var newArray = this.state.data.slice();
    newArray.push(newItem);
    this.setState(state => ({
      data: newArray,
      from: '',
      to: '',
      weight: ''
    }));
  }
}

export default Sankey;