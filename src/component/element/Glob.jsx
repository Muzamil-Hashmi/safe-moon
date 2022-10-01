import React from "react";

export default function Glob() {
  return (
    <div>
      <div className="container bg-dark text-white ">
        <div className="row">
          <div className="col-6 my-5">
            <div>
              <button type="button" class="btn-cust btn-light">
                about us
              </button>
            </div>
            <h2 className="">
              A human-focused technology and innovation business expanding
              blockchain technologies for a brighter tomorrow.
            </h2>
            <p>
              Deeply connected to and driven by our award winning community (The
              SafeMoon Army), we are innovating for good. Building blockchain,
              commerce, metaverse and NFT products to derive new kinds of value
              from crypto technology and to apply it to increasingly better use.
            </p>
            <p>
              We are now addressing the second part of our mission – the
              expansion and channeling of our technology to propel new
              innovations for good, and a Venture Philanthropy model to advance
              those innovations to every part of the world.
            </p>
          </div>

          <div className="col-6 text-center">
          <img id="img" src="assets/earth.jpg" width={400} />

          </div>
        </div>
      </div>
    </div>
  );
}
