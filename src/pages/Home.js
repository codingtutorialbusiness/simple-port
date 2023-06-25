import React from "react";
import "./Home.css";
import {
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="contact-list">
      <ul>
        <li>
          <span>
            <BsFillEnvelopeAtFill /> Emial:
          </span>
          <span>email@gmail.com</span>
        </li>
        <li>
          <span>
            <BsFillTelephoneFill /> Phone:
          </span>
          <span>012 5567 789</span>
        </li>
        <li>
          <span>
            <BsTwitter /> Twitter:
          </span>
          <span>@learncodetuts</span>
        </li>
        <li>
          <span>
            <BsGithub /> Github:
          </span>
          <span>@learncodetuts</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
