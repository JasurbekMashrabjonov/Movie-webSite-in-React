import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/Context';
import MyMenuBtn from './MyMenuBtn';

function MenuMobile(props) {
  const {menuBar,setMenuClose} = useContext(ContextProvider);

    return (
        <>  
              
              <div className={`menu ${menuBar}`}>
              <div className="logo_mobile">
              <h2 className="logo_title">Logo</h2>
              <i
                onClick={() => setMenuClose()}
                className="fa-solid fa-xmark fa-2x menu_close"
              ></i>
              </div>
             <ul className="ul4">
                  <li className="li4">
                    <a href="#!" className="a4">Home</a>
                  </li>
                 <MyMenuBtn name={"Kinolar"} l1={"Tarjima kinolar"} l2={"Multfilmlar"} l3={"Hind kinolar"}/>
                 <MyMenuBtn name={"Kategoriyasi"} l1={"Filmlar"} l2={"Seriallar"} />
                 <MyMenuBtn name={"Yili"} l1={"2021"} l2={"2020"} l3={"2019"}/>
             </ul>
            </div>   
        </>
    );
}

export default MenuMobile;