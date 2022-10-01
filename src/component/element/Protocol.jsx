import React from "react";
import { FaCat } from "react-icons/fa";


export default function Protocol() {
  return (
    <div>
      <div className="container bg-dark text-white mt-5 " >
        <div className="row">
          <div className="col-6 ">
            <div>
              <button type="button" class="btn-cust btn-light">
                The token
              </button>
            </div>
            <h2 className="">
              The SafeMoon Protocol V2 is a community focused DeFi token that
              forms part of the expanding SafeMoon ecosystem. .
            </h2>
            <p>Four simple functions occur during each trade</p>
            <div className="d-flex gap-2"  data-aos="fade-in">
              <FaCat color="aqua" size={30}/>
            <div>
              <h5 className="mb-0">Reflections</h5>
              <p className="mb-0 opacity-50">4% is Redistributed to all existing holders</p>
            </div>
            </div>
            <div className="d-flex gap-2" data-aos="fade-in">
              <FaCat color="aqua" size={30} />
            <div>
              <h5 className="mb-0">LP Acquisition</h5>
              <p className="mb-0 opacity-50">3% is added to liquidity</p>
            </div>
            </div>
            <div className="d-flex gap-2" data-aos="fade-in">
              <FaCat color="aqua" size={30} />
            <div>
              <h5 className="mb-0">Token Burn</h5>
              <p className="mb-0 opacity-50">2% of tokens are burned</p>
            </div>
</div>
<div className="d-flex gap-2" data-aos="fade-in">
              <FaCat color="aqua" size={30} />
            <div>
              <h5 className="mb-0">Growth Fund</h5>
              <p className="mb-0 opacity-50">1% is added to the SafeMoon Ecosystem Growth Fund</p>
            </div>
            </div>
          </div>

          <div className="col-6 text-center">
            <img id="img" src="assets/man.png" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
