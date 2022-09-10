import React from 'react';
import {useState} from 'react';
function MyLike(props) {
    const [like,setLike] = useState(0);
   
    return (
        <>
             <i  
             onClick={()=>setLike(prev=>prev+1)}
            className="fa-regular fa-thumbs-up"></i>
            {like}   
        </>
    );
}

export default MyLike;