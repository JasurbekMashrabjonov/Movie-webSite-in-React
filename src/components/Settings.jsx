import React, { useContext, useState } from "react";
import { ContextProvider } from "../reducer/Context";
import Clock from "./Clock";

function Settings(props) {
  const { setBg, setBgUl2,setBgContent,setBgFooter,setBgCard,isClick, setIsClick} = useContext(ContextProvider);
  const [show, setShow] = useState("hide");

  function f1() {

    if (isClick) {
      setShow("show");
    } else {
      setShow("hide");
    }
  }
  return (
    <>
      <a
        className="a1"
        href="#!"
        onClick={() => {
          f1();
          setIsClick(!isClick);
        }}
      >
        <i className="fa-solid fa-gear"></i>
      </a>
      <ul className={`ul3 ${show}`}>
        <li className="li3">
          <div className="row_">
            <h3>Sahifa foni:</h3>
            <i
              onClick={() => {
                f1();
                setIsClick(!isClick);
              }}
              className="fa-solid fa-xmark fa-2x"
            ></i>
          </div>
        </li>
        <li className="li3">
          <div className="row_">
            <h4>Fon varianti</h4>
          </div>
        </li>
        <li className="li3">
          <div className="row_">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => {
                  setBgUl2("bg_light_ul2");
                  setBgContent("content_light")
                  setBgFooter("footer_light")
                  setBgCard("card_light")
                  setBg("bg_light_navbar2");
                }}
              />
              <span>Yorqin</span>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => {
                  setBgUl2("bg_dark_ul2");
                  setBg("bg_dark_navbar2");
                  setBgContent("content_dark")
                  setBgFooter("footer_dark")
                  setBgCard("card_dark")
                }}
              />
              <span>Qorong'u</span>
            </div>
          </div>
        </li>
        <li className="li3">
          <div className="row_">
            <h4>Fon rangi</h4>
          </div>
        </li>
        <li className="li3">
          <div className="row3">
            <div className="color_div siyoh"></div>
            <div className="color_div binafsha"></div>
            <div className="color_div yashil"></div>
            <div className="color_div qora"></div>
          </div>
        </li>
              <hr />
        <li className="li3">
              <Clock/>
        </li>
      </ul>
    </>
  );
}

export default Settings;
