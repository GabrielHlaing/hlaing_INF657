import React, {useState} from 'react';

export default function Button(){
    const [msg, setMsg] = useState("");

    function handleClick(){
        if(msg == ""){
            setMsg("Hello! Welcome to React Native!");
        }else{
            setMsg("");
        }
    }

    return(
        <div>
            <button onClick={handleClick}>
                Toggle Button
            </button>
            <h3><i>{msg}</i></h3>
        </div>
    );
}
