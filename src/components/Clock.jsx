import React from 'react';

function Clock(props) {
    let data
    let date = new Date();
    setTimeout(() => {
        data = date.getHours+":"+date.getMinutes;
     },
      1000);
    return (
        <>
            <h3>
                { data}
            </h3>   
        </>
    );
}

export default Clock;