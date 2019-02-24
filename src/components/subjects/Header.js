import React from "react";
const Header=(props)=>{
    return(
        
        <div>
    <div className="container">
    <div className="upper-div">

        <div className="row">
        <div className="col-md-4 text-sm-center text-md-left">
             <div>
            <img className="img float-leftt" src="./photo/batch53.jpg" alt=""/>
            <div className="float-leftt space">
            <h4>Communications</h4>
            <h6>2nd year</h6>
            <h6>Engineering,Helwan</h6>
            </div>
             </div>
        </div>
        <div className="col-md-4 text-sm-center text-md-left center-el">
            <div className="massenger">
            <i className="fab fa-facebook-messenger fa-3x  float-leftt"></i>
            <div className="float-leftt space">
            <div>Click to use </div>
            <span>batchboat of your batch</span>
            </div>
            </div>

        </div>
        <div className="c col-md-4 text-sm-center text-md-left">
           <div className="left-el">
            <img className="float-leftt img" src="./photo/calendar.png" alt=""/>
             <div className="space float-leftt">
            <h4>last update</h4>
            <h6>7,jun.2018</h6>
           </div>
           </div>
           </div>
           </div>
        </div>
        </div>
        </div>
    
    )
}
export default Header;