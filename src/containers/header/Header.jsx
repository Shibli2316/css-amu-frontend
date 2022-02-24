import React from 'react';
import a from '../../assets/cssamucenter.png';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => (
  <div className="csd__header section__padding" id="home">
    <div className="csd__header-content">
      <h1 className="gradient__text">COMPUTER SCIENCE SOCIETY</h1>
      <p>The Computer Science Society - CSS (Formerly the Area of Dominant Coders Club - ADC) is an initiative of the students of the Department of Computer Science, Aligarh Muslim University, Aligarh. It is a platform to share the knowledge of Computer Science among all the interested members of the Faculty of Science.</p>

      <div className="csd__header-content__input">
        <Link to="/join" >
          <button type="button">&nbsp; &nbsp; Join Us &nbsp; &nbsp; </button>
        </Link>
      </div>
    </div>

    <div className="csd__header-image">
      <img src={a} alt="img"/>
    </div>
  </div>
);

export default Header;