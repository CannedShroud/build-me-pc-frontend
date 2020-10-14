import { Button } from "@material-ui/core";
import React from "react";
import Header from "../Components/Header";
import "../Styles/Estimator.css";
import Form from "../Components/Form";

function Estimator() {
  return (
    <div className="estimator">
      <Header />
      <div className="estimator__body">
        <div className="estimator__top">
          <div className="estimator__content">
            <div className="estimator__intro">
              <h4>
                WELCOME TO THE <span>ESTIMATOR</span>
              </h4>
              <h1>
                <span>PC Building</span> Made Simple
              </h1>
              <p>
                Here is where part picking gets simple, you just input the
                critera, <br />
                and get all the parts you need shortlisted. <br />
                <span>Here is how it will go</span>
              </p>
            </div>
            <div className="estimator__steps">
              <ul>
                <li>
                  <div className="estimator__step">
                    <div className="estimator__index">1</div>
                    <h3>Pick your Price</h3>
                  </div>
                </li>
                <li>
                  <div className="estimator__step">
                    <div className="estimator__index">2</div>
                    <h3>Choose your Games</h3>
                  </div>
                </li>
                <li>
                  <div className="estimator__step">
                    <div className="estimator__index">3</div>
                    <h3>Umm... Extras?</h3>
                  </div>
                </li>
              </ul>
            </div>
            <Button
              className="estimator__getStartedBtn"
            >
              GET STARTED
            </Button>
          </div>
          <div className="estimator__caseImg">
            <img
              src="https://cdn.shopify.com/s/files/1/2507/5448/products/mb520-122-1200x1200_683_compact.png?v=1597971261"
              alt=""
            />
          </div>
        </div>
        <div className="estimator__bottom">
          <div className="estimator__form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimator;
