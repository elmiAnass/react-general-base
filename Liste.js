import React from "react";
const Liste = (props) =>{
function alert(){ console.log("Hello World") }
   
  return (
    <div>
      <h3>Liste des choix</h3>
    <ul style = {{ color : props.color,fontWeight:props.font}}>
      <li>DD</li>
      <li>ID</li>
      <li>DOWFS</li>
    </ul>
    <button onClick={alert}> Click To say Hello World  </button>
    </div>
  );
}
export default Liste ;