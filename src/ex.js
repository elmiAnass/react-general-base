import React from "react";


export default class Ex extends React.Component{
  render(){
    return(
      <div>
        <p >{Math.random() * 10}</p>
      </div>
    );
  }
}