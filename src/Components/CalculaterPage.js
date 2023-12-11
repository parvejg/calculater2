import { useState } from "react";
import "./CalculaterPage.css";
export const Calculater = () => {
  const [inputvalue, setInputValue] = useState("");
  return (
    <div className="main-container">
      <div className="calculater-wrapper">
        <input type="text" className="calculter-input" value={inputvalue} />
        <div className="calculater-btn-wrapper">
          <button
            className="calculater-btns"
            value={inputvalue}
            onClick={(e) => setInputValue("")}
          >
            AC
          </button>
          <button
            className="calculater-btns"
            value={inputvalue}
            onClick={(e) =>
              setInputValue(
                inputvalue ? -inputvalue : inputvalue + e.target.value
              )
            }
          >
            +/-
          </button>
          <button
            className="calculater-btns"
            value="%"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            %
          </button>
          <button
            className="r-side-btn"
            value="/"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            /
          </button>
        </div>
        <div className="calculater-btn-wrapper">
          <button
            className="calculater-btns"
            value="7"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            7
          </button>
          <button
            className="calculater-btns"
            value="8"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            8
          </button>
          <button
            value="9"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            9
          </button>
          <button
            className="r-side-btn"
            value="*"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            x
          </button>
        </div>
        <div className="calculater-btn-wrapper">
          <button
            className="calculater-btns"
            value="4"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            4
          </button>
          <button
            value="5"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            5
          </button>
          <button
            value="6"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            6
          </button>
          <button
            value="-"
            className="r-side-btn"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            −
          </button>
        </div>
        <div className="calculater-btn-wrapper">
          <button
            value="1"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            1
          </button>
          <button
            value="2"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            2
          </button>
          <button
            value="3"
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            3
          </button>
          <button
            value="+"
            className="r-side-btn"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            +
          </button>
        </div>
        <div className="calculater-btn-wrapper">
          <button
            value="0"
            className="calculater-zero-btn"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            0
          </button>
          <button
            value="."
            className="calculater-btns"
            onClick={(e) => setInputValue(inputvalue + e.target.value)}
          >
            .
          </button>
          <button
            value="="
            className="r-side-btn"
            onClick={(e) => setInputValue(eval(inputvalue))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};
