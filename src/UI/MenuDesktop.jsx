import React from 'react';

import{ useContext} from 'react';
import { ContextProvider } from '../reducer/Context';
function MenuDesktop(props) {
  const {setType,bgUl2} = useContext(ContextProvider)



    return (
        <>
             <ul className="ul1">
              <li className="li1">
                <a href="index.html" className="a1">
                  Home
                </a>
              </li>
              <li className="li1">
                <a href="#!" className="a1">
                  Kinolar
                </a>
                <ul className={`ul2 ${bgUl2}`}>
                  <li className="li2">
                    <a href="#!" className="a2">
                      Tarjima kinolar
                    </a>
                  </li>
                  <li className="li2">
                    <a href="#!" className="a2">
                      Premyeralar
                    </a>
                  </li>
                  <li className="li2">
                    <a href="#!" className="a2">
                      Hind kinolar
                    </a>
                  </li>
                  <li className="li2">
                    <a href="#!" className="a2">
                      Multfilmalar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="li1">
                <a href="#!" className="a1">
                  Kategoriyasi
                </a>
                <ul className={`ul2 ${bgUl2}`}>
                  <li className="li2"
                  onClick={()=>setType('series')}
                  >
                    <a href="#!" className="a2">
                      Seriallar
                    </a>
                  </li>
                  <li className="li2"
                  onClick={()=>setType('movie')}
                  
                  >
                    <a href="#!" className="a2">
                      Filmlar
                    </a>
                  </li>
                </ul>
              </li>

              <li className="li1">
                <a href="#!" className="a1">
                  Yili
                </a>
                <ul className={`ul2 ${bgUl2}`}>
                  <li className="li2">
                    <a href="#!" className="a2">
                      2022
                    </a>
                  </li>
                  <li className="li2">
                    <a href="#!" className="a2">
                      2021
                    </a>
                  </li>
                  <li className="li2">
                    <a href="#!" className="a2">
                      2019
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
        </>
    );
}

export default MenuDesktop;