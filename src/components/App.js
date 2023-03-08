import React, { useState } from "react";

function App()
{

    setInterval(updateTime,1000);

    const presentTime=new Date().toLocaleTimeString();

    const[time , getTime]=useState(presentTime);

    function updateTime()
    {
        const newTime = new Date().toLocaleTimeString();
        getTime(newTime);
    }



    return(
        <div className="container">
        <div className="time"><h1>{time}</h1></div>  
        </div>
    )
}

export default App;