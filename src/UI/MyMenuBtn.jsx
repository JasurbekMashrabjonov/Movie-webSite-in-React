import React, { useContext, useState } from 'react';
import { ContextProvider } from '../reducer/Context';
import "../styles/MyMenuBtn.css"
function MyMenuBtn(props) {
  const [ul5,setUl5] = useState(false)
  const {setType} = useContext(ContextProvider)

    return (
        <>
             <li className="li4" 
                  onClick={()=>setUl5(!ul5)}
                  >
                    <a href="#!" className="a4">{props.name}</a>
                   
                   {ul5 ? 
                    (
                      <ul className={`ul5 class1`}>
                      <li className="li5"
                      onClick={()=>{
                        if (props.l1 === "Filmlar") {
                          setType('movie')
                        }
                      }}
                      ><a href="#!" className="a5">{props.l1}</a></li>
                      <li className="li5"
                      onClick={()=>{
                        if (props.l2 === "Seriallar") {
                          setType('series')
                        }
                        else{
                          console.log("bu emas")
                        }
                      }}
                      ><a href="#!" className="a5">{props.l2}</a></li>
                      {props.l3 ?(
                      <li className="li5"><a href="#!" className="a5">{props.l3}</a></li>
                      )
                    :null}
                    </ul>
                    ) 
                    :null
                  }
                
                  </li>
        </>
    );
}

export default MyMenuBtn;