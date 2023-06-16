import React from "react"
import "./Carta.css"
function Carta(fallout){
    return(
        <div className="carta-box">
          <span id="specialFO">{fallout.special}</span>
          <div className="carta">
            <div className="cara">
              <img src={fallout.cara}  alt="cara superior de la carta" width="140px" height="180px" />
            </div>
            <div className="cara detras">
              <img src={fallout.detras} alt="cara por detras de la carta" width="140px" height="180px" />
            </div>
          </div>
        </div>
    )
}

export default Carta