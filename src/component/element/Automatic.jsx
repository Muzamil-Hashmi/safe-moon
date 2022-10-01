import React from 'react'
import {IoIosPeople} from "react-icons/io"

export default function Automatic() {
  return (
    <div>
      
      <div className="container text-white mt-5" data-aos="fade-in">
        <div className="row">
            <div className="col-1">
                <div className="text-center my-5">
<IoIosPeople size={80}/>
</div>
            </div>
            <div className="col-3 " data-aos="fade-in">


           <h4>Community Focused</h4 >
           <p>Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else</p>
           <a href="" className='fw-b text-highlight text-aqua'>
                Join us
                <i className="far fa-arrow-right "></i>
            </a>
            </div>

            <div className="col-1">
            <div className="text-center my-5">
<IoIosPeople size={80}/>
</div>


            </div>
            <div className="col-3">

                <h3>Automatic LP</h3>
                <p>Every trade contributes towards auto-generating liquidity that goes into multiple pools used by exchange</p>
                <a href="" className='fw-b text-highlight'>
                View BscScan
                <i className="far fa-arrow-right "></i>
            </a>
            </div>
            <div className="col-1">
            <div className="text-center my-5">
<IoIosPeople size={80}/>
</div>


            </div>
            <div className="col-3">

                <h3>RFI Static Rewards</h3>
                <p>Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely</p>
            <a href="" className='fw-b text-highlight'>
                Cheak your Wallet
                <i className="far fa-arrow-right "></i>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}
