import "./App.css";
import BgCardBack from "../src/images/bg-card-back.png";
import BgCardFront from "../src/images/bg-card-front.png";
import CardLogo from "../src/images/card-logo.svg";
import IconComplete from "../src/images/icon-complete.svg";
import Confetti from "react-confetti";
import React from "react";
import { Helmet } from "react-helmet";

function App() {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [windowDimenson, setDimenson] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimenson({ width: window.innerWidth, height: window.innerHeight });
  };

  React.useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenson]);

  return (
    <main class="grid">
      <Helmet>
        <script type="text/javascript" src="script.js"></script>
      </Helmet>
      <div class="background">
        <div class="background-top"></div>
        <div class="background-bottom"></div>
      </div>
      <div class="holder">
        <div class="container">
          <div class="card-container">
            <div class="card back">
              <img src={BgCardBack} alt="card-back" class="card-img" />
              <div class="card-cvc">000</div>
            </div>
            <div class="card front">
              <img src={BgCardFront} alt="card-front" class="card-img" />
              <div class="card-info">
                <div class="card-logo">
                  <img src={CardLogo} alt="card-logo" class="card-logo" />
                </div>
                <div class="info">
                  <div class="card-number">0000 0000 0000 0000</div>
                  <div class="card-holder">
                    <div class="name">Jane Appleseed</div>
                    <div class="date">
                      <span class="month">00</span>/<span class="year">00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-container">
            <form action="#" class="form">
              <div class="form__input-group">
                <label for="name" class="form__label">
                  Cardholder Name
                </label>
                <input
                  id="name"
                  type="text"
                  class="form__input"
                  placeholder="e.g. Jane Appleseed"
                  data-target="error-name"
                />
                <span class="form__error" id="error-name"></span>
              </div>

              <div class="form__input-group">
                <label for="number" class="form__label">
                  Card Number
                </label>
                <input
                  id="number"
                  type="text"
                  class="form__input"
                  placeholder="e.g. 1234 5678 9123 0000"
                  data-target="error-number"
                />
                <span class="form__error" id="error-number"></span>
              </div>

              <div class="form__input-group--split">
                <div class="form__input-group form__input-group--date-group">
                  <label for="month" class="form__label">
                    Exp. Date (MM/YY)
                  </label>
                  <div class="form__input-group">
                    <div class="form__input-group--date-inputs">
                      <input
                        id="month"
                        type="text"
                        maxlength="2"
                        class="form__input"
                        placeholder="MM"
                        data-target="error-date"
                      />
                      <input
                        id="year"
                        type="text"
                        maxlength="2"
                        class="form__input"
                        placeholder="YY"
                        data-target="error-date"
                      />
                    </div>
                    <span class="form__error" id="error-date"></span>
                  </div>
                </div>
                <div class="form__input-group form__input-group--cvc">
                  <label for="cvc" class="form__label">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    maxlength="3"
                    class="form__input"
                    placeholder="e.g. 123"
                    data-target="error-cvc"
                  />
                  <span class="form__error" id="error-cvc"></span>
                </div>
              </div>
              <button
                onClick={() => setShowConfetti(!showConfetti)}
                class="button button--form"
                type="submit"
              >
                Confirm
              </button>
            </form>
            <div>
              {showConfetti && (
                <Confetti
                  width={windowDimenson.width}
                  height={windowDimenson.height}
                  run={true}
                  recycle={false}
                />
              )}
              <div class="success">
                <div class="success__icon">
                  <img src={IconComplete} alt="" />
                </div>
                <h1 class="success__heading">Thank you!</h1>
                <p class="success__message">We’ve added your card details</p>
                <button class="button button-continue">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
