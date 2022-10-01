import React from "react";

export default function hero() {
  return (
    <div id="home">
        
      <div>
      {/* <div><button type="button" className="btn btn-light">Light</button>
</div> */}
      {/* <video src="assets/herobg.mp4" autoplay muted loop id="myVideo" /> */}
        <div className="container bg-dark text-white mt-5 " style={{height:'100vh'}}>
          <div className="row">
            <div className="col-6 ">
              <p>
                WELCOME TO
                <h1>SAFEMOON  </h1>
                
                Community-driven Innovation for Good
              </p>
             <div className="my-5">
             <button type="button" className="btn btn-primary btn-lg" id="button">
                Consolidata to V2 SafeMoon
              </button>
              {/* <a class="btn btn-link text-light btn-lg px-0 me-4 font-weight-bold buybtn" href="#" target="_blank" rel="nofollow noopener noreferrer">Buy V2</a> */}
              <a href="" className="btn btn-lg font-weight-bold text-dark">
                {" "}
                Buy v2
              </a>
              <a href="" className="btn btn-lg  text-dark">
                {" "}
                Swap
              </a>
            
            <div className="live">
              <a href="" className="btn btn-lg  ">
                {" "}
                Live Chart
              </a>
            </div>
             </div>
            
            <p>SafeMoon (SFM) V2 Contract:</p>
            <span id="page">
            0x42981d0bf...b9092fcB5
                </span>
            </div>
            <div className="col-6 text-center">
                <div className="text-center">
                    <p>out now:</p>
                    <h4>Safe Moon Wallet</h4>
                    <p>get it on:</p>
                </div>
              <button type="button" class="btn btn-dark ">
                <img height={50}
                  src="https://safemoon.com/_next/image?url=%2Fimg%2Fgoogle_play.png&w=256&q=75"
                  alt=""
                />
              </button>
              <button type="button" class="btn btn-dark ">
                <img height={50}
                  src="https://safemoon.com/_next/image?url=%2Fimg%2Fapp_store.png&w=256&q=75"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
