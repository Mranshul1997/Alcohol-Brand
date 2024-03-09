import React, { useState } from "react";
import "./Age.css";
export default function ( {setage}) {
  let [Rage,setRage]=useState("")
 const handler=(e)=>{
  e.preventDefault();
 if(Rage)
 {
  let currentyear = new Date().getFullYear();
  let birthYear=new Date(Rage).getFullYear();
  let userAge= currentyear-birthYear;
    if(userAge>=21){
      setage(true);
    }
    else{
      setage(false);
    }
 }
};
  
  return (
    <div id="main">
      <div id="age">
         <img src="https://th.bing.com/th/id/R.82aebd0dfac7cf8bae42acf7eb01e14d?rik=9ZmMI4byqcm0Qw&riu=http%3a%2f%2fstcroixtourism.com%2fcaptainmorgan%2fcaptain-morgan-new.gif&ehk=K49TjYS26mXwtJt7NI%2fxOGM1%2fZykNBM%2b73V4BgKUsSw%3d&risl=&pid=ImgRaw&r=0" alt="" /> 
        <center>
          <h4>GREAT TO SEE YOU!WE MUST CHECK IF YOU ARE OVER 25</h4>
          <input type="date" value={Rage} onChange={(e) => setRage(e.target.value)}/>
          <br />
          <button onClick={handler}>ENTER</button>
          <p>Remember me on this device (unless shared)</p>
          <p>This info is all part of our commitment to responsible drinking</p>
          <h3>DRINKIQ</h3>
          <p><u>Conditions of Use</u></p>
          <p><u>India</u></p>
        </center>
      </div>
    </div>
  );
}
