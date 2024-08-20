import React, { Component } from 'react';
import CustomCarousel from '../components/CustomCarousel';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
              <CustomCarousel />

        <div>
          <h1  style={{ marginTop: '15px' }}>Hello University Students!</h1>
          <p>Welcome to your new English course registration application. Currently, there is an open summer course in cooperation with the British Council and with a special discount for Zewailian students, press:</p>
          <ul>
            <li><a href='https://www.britishcouncil.org.eg/en/english/courses-adults'>Course info</a> to navigate you to the course description page.</li>
            <li><a href='https://www.zewailcity.edu.eg/'>Main website</a> to navigate you to your University main Website.</li>
          </ul>
          <p>Best Of Luck For All Zewailian Students!</p>
        </div>
      </div>
    );
  }
}
