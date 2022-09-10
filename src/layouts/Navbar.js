import React, { useContext} from 'react';
import { ContextProvider } from '../reducer/Context';
import "../styles/Navbar.css"
import "../styles/all.css"
import Search from  "../components/Search"
import {useState} from 'react';
function Navbar(props) {
    const {setType} = useContext(ContextProvider)
    //   const [isSelect,setIsSelect] = useState(false)
    const [active,setActive] = useState('noActive');
    const [active2,setActive2] = useState('active');


    return (
            <>
                 <div className="navbar" id="navba">
                    <a href="#!" className="logo">KinoBor.uz</a>
                    <input type="checkbox" name="" id="menu_bar" />
                    <label><span className="menu_name"></span> <i className="fa-solid fa-bars"></i></label>
                    <nav>           
                            <ul>
                                <li><a href="#!">Bosh sahifa</a></li>
                                <li><a href="#!">Kinolar</a></li>
                                <li><a href="#!" className="a_js1">Janr  <i className="fa-solid fa-sm fa-caret-down"></i></a>
                                    <ul className="ul_js1">
                                        <li><a href="#!"
                                        className={active}
                                         onClick={()=>{
                                            setType('series');
                                            // setIsSelect(true);
                                            // this.classList.add('active');
                                            setActive('active');
                                             setActive2('noActive');   
                                         }}   
                                        >Seriallar</a></li>
                                        <li><a href="#!"
                                        className={active2}

                                        onClick={()=>{
                                            setType('movie')
                                            // setIsSelect(true);
                                            setActive2('active');
                                            setActive('noActive');   

                                        }}
                                        >Premyeralar</a></li>
                                    </ul>
                                </li>
                                <li><a href="#!" className="a_js2">Yil    <i className="fa-solid fa-sm fa-caret-down"></i></a>
                                    <ul className="ul_js2">
                                        <li><a href="#!">2022</a></li>
                                        <li><a href="#!">2021</a></li>
                                    
                                        
                                    </ul>
                                </li>
                                <li>
                                    <a href="#!" className="input_a">
                                    <Search/> 
                                    </a>
                                </li>
                              
                            </ul>
                        
                    </nav>
                </div>
                <a href="#!"
                onClick={()=>{
                    window.scrollY(0);
                }}
                >
                <div className="up" >
                    
                
                    <i className="fa-solid fa-chevron-up"></i>
               
                </div>
                </a>
                </>
    );
}

export default Navbar;
