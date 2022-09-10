import React, { useContext } from "react";
import "../styles/Navbar2.css";
import "../styles/all.css";
import MenuMobile from "../UI/MenuMobile";
import MenuDesktop from "../UI/MenuDesktop";
import Search from "../components/Search";
import MyLists from "../components/MyLists";
import { ContextProvider } from "../reducer/Context";
import Settings from "../components/Settings";

function Navbar2(props) {
  const {bg,setMneuBar} = useContext(ContextProvider);

 



  return (
    <>
      <div className={`navbar2 ${bg}`}>
        {/* left */}
 
        <MenuMobile />
        
      

        <div className="left_navbar2">
          <div className="menu_bar"
          onClick={()=>setMneuBar()}
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </div>
          <div className="left_n2">
            <div className="logo_box">
              <h2 className="logo_title">Logo</h2>
            </div>
            <MenuDesktop />
          </div>
        </div>

        {/* Right */}
        <div className="right_navbar2">
          <ul className="ul1">
            <li className=" li_search">
              <Search/>
            </li>
            <li className="li1" id="list_li">
             <MyLists/>
            </li>
            <li className="li1" >
              <Settings/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
