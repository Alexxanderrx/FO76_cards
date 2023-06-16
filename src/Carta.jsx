import React from "react"
import "./Carta.css"
function Carta(fallout){
    return(
        <div className="carta-box">
          <div className="carta">
            <div className="cara">
              <img src={fallout.cara} width="140px" height="180px" />
            </div>
            <div className="cara detras">
              <img src={fallout.detras} width="140px" height="180px" />
            </div>
          </div>
        </div>
    )
}

export default Carta