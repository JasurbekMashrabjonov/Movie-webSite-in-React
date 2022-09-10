import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/Context';
import "../styles/Footer.css";

function Footer(props) {
    const {bgFooter} = useContext(ContextProvider)
    let date = new Date();
     
    return (
        <>
           <div className={`footer ${bgFooter}`}>
                <footer>
                    <div className="">
                        <p>
                            &copy; {date.getFullYear()} Mualliflik huquqi bilan himoyalangan
                        </p>
                    </div>
                    <div className="">
                        <p>Jasurbek Bahtiyorjon o'g'li tomonidan qurildi!</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;