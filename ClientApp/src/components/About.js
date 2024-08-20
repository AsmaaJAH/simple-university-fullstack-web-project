import React, { Component } from 'react';

export class About extends Component {
  static displayName = About.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : About.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >About The New University App:</h1>
        <p>This is a demo learning app for "Simple University/Organization", and a "Full Stack Web Project" using:</p>
        <ul>
            <li>The .NET framework,and C# for server-side code</li>
            <li>EF core and mySQL for Database.</li>
            <li>React.js for client-side code.</li>
            <li>Bootstrap for layout and styling.</li>
        </ul>
        <p>
          Feel free to discover more of my projects on: 
          <a href='https://github.com/AsmaaJAH'>My Github</a>.
        </p>
        {contents}
      </div>

    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
