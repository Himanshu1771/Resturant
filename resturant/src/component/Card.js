import React from "react";

const Card = ({ menu }) => {
  return (
   <>
 


      {menu.map((curElem) => {

         const {id, image, name ,category,  description} = curElem

        return (
        
          
                <div
                  className="card mx-5 my-3"
                  style={{ backgroundColor: "white", width: "20rem" ,display:"inline-block"}}
                >
                  <img src={image} className="card-img-top"  style={{ height: "16rem" }}alt="..." />
                  <h5 className="card-title"> No { id }</h5>
                  <div className="card-body">{category}
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                    { description}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Order Now
                    </a>
                  </div>
                </div>
                

              
        );
      }
      )

    }
      
     
</>    
  );
};

export default Card;
