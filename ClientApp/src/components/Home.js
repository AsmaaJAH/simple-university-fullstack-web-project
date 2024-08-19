import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export class Home extends Component {
  static displayName = Home.name;

  render() {
   return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="photo1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="photo2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="photo3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="photo4.jpg" alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="photo5.jpg" alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1>Hello University Students!</h1>
        <p>Welcome to your new English course registration application. Currently, there is an open summer course in cooperation with the British Council and with a special discount for Zewailian students, press:</p>
        <ul>
          <li><a href='https://www.britishcouncil.org.eg/en/english/courses-adults'>Course info</a> to navigate you to the course description page.</li>
          <li><a href='https://www.britishcouncil.org.eg/en/english/courses-adults'>Register as a Zewailian student</a> to navigate you to the discounted course's registration page.</li>
          <li><a href='https://www.zewailcity.edu.eg/'>Main website</a> to navigate you to your University main Website.</li>
        </ul>
        <p>Good Luck Zewailian Students!</p>
      </div>
    </div>
  );
  }
}
