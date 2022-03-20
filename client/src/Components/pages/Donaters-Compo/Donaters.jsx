import React, { useEffect, useState } from "react";
import { getDonatersData } from "../../../Services/donaters-service";
export default function Donaters() {
  const [donaters, setDonaters] = useState([]);
  
  useEffect(() => {
    getDonatersData().then(res=>setDonaters(res));  
  }, []);
  return <div>
      <h1>Donaters</h1>

      <div className="showDonaters">
          {donaters.map(don=>
            <div className="donaterCard" style={{border:"blue solid 1px"}}>
                
                <h1>{don.Name}</h1>
                <h2>{don.About}</h2>
                <h3>{don.WhyDonate}</h3>
                <img style={{height:"150px",width:"150px",borderRadius:"50%"}} src={don.ProfilePic} alt="" />

            </div>)}
      </div>
  </div>;
}
