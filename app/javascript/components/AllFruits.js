import React from "react";

class AllFruits extends React.Component {
    
    render(){
        var fruits = this.props.fruits.map((fruit) => {
         return(
          <div key={fruit.id}>
           <h1>{fruit.name}</h1>
           <p>{fruit.description}</p>
          </div>
         )
        })
        return(
         <div>
          {fruits}
         </div>
        )
       }
  }

export default AllFruits;
