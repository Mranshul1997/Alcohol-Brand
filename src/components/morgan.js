import React, { useEffect, useState } from "react";
import "./Morgan.css";
import CaptainMOrgan from "./captain/CaptainMOrgan";
import Loading2 from "./captain/Loading2";
import Age from "./captain/Age";


export default function Morgan() {
  let [show,setShow]=useState(true)
  let [showNav,setshowNav]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShow(false);
      setshowNav(false);
    },4000)
    
  },[])

  const setage=(isVerified)=>{
    setshowNav(isVerified)
  };

  return (
    <> 
      <div>
        {show ? (
          <Loading2/>
        ) : showNav ?(
          <CaptainMOrgan/>
          ):(
            <Age setage={setage}/>
          )
        }
        {/* <CaptainMOrgan/> */}
         
      </div>
    

    
    </>
  );
}