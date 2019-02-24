import React from "react";
const Subject =(props)=>{
    return(
        <div>
      
           <div className="math">
                    <div className="row">
                        <div className={props.color}>M</div>
                        <span>Mathe ODE part 1</span>
                    </div>
                    <div className="subject-information">
                        <div className="container text-center space">
                    <div className="row">
                            <div className="col-sm-6"><i className="fa fa-users"></i> dr.khaled</div>
                            <div className="col-sm-6"><i className="fa fa-th"></i> mon thu</div>
                        </div>
                    </div>
                        <div className="container text-center space">
                    <div className="row">
                            <div className="col-sm-6"><img src="photo/note.png" alt=""/> degree:250</div>
                            <div className="col-sm-6"><img src="photo/push-pin.png" alt=""/>Extended</div>
                        </div>
                    </div>
                    
                    
                    </div>
                    </div>
                    </div>
    )}
export default Subject;
