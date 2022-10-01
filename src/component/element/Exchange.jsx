import React from 'react'

export default function Exchange() {
  return (
    <div id='background'>
        
    <div className="container  text-white mt-5 ">
      <div className="row">
        <div className="col-md-6  m-auto">
          <div>
            <button type="button" class="btn btn-light">
              Introduction
            </button>
          </div>
          <h2 className="">
          The SafeMoon Exchange
          </h2>
          <p>
          The SafeMoon exchange is a revolutionary new idea that will bring tokenomics to all of crypto on its platform. We call this Cryptonomics
          </p>
          <a href="" className='class="btn btn-outline-light px-5 btn-lg rounded-pill disabled"'> Comming Soon</a>
        </div>

        <div className="col-6 text-center" data-aos="fade-left">
        <img id="img" src="assets/mobile.png" width={400} />

        </div>
      </div>
    </div>
  </div>
  )
}
