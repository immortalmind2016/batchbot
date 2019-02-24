import React from "react";
import $ from "jquery";
export default class Options extends React.Component{
    componentDidMount=()=>{

        $('body .sub .matarial .options .matarial-type .a span').click(function(){
            $(this).addClass('active');
            $(this).parent().siblings().children().removeClass("active");
         });
      
    }

    render(){
    
    return(
   <div>
 
    <div className="options">
    <div className="container">
        <div className="row">
            <div className="show col-sm-2"> <div className="show-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <div className="choose-term">
                <div className="row">
                <span className="col-sm-6 text-center term-type">1st Term</span>
                <span className="col-sm-6 text-center term-type active">2nd Term</span>
            </div>
            </div>
                
                 <div className="row text-center matarial-type">
               <div className="col-sm-3 a"><span className="active">LECS</span></div>
                <div className="col-sm-3 a"><span>secs</span></div>
                  <div className="col-sm-3 a"><span>Videos</span></div>
                   <div className="col-sm-3 a"><span>Tasks</span></div>
                 </div>
                 </div>
            </div>
            </div>
        
  </div>
    );
}
}
