import React from 'react';
import {useState} from 'react';
function MyLike(props) {
    const [dislike,setDisLike] = useState(0);

   
    return (
        <>
            <i
                                  onClick={()=>setDisLike(prev=>prev+1)}
                                  className="fa-regular fa-thumbs-down"></i>
                                  {dislike}  
        </>
    );
}

export default MyLike;