import React from "react";
import "./style.css";
{/* ////////////////////////////////////////////////////////////////*/}
import Liste from "../Liste.js";
import Header from "../Header";
import Produit from "./pr";
{/* ////////////////////////////////////////////////////////////////*/}
import Ex from  "./ex"
export default class  App extends React.Component {
  // state = {name:"Anass",Prenom : "Elmissaoui", cont : 0}
  //  change = ()=>{
  //   this.setState ( {name :"Super",Prenom : "Hero"})
  // }
  render()
  {
  return (
    <div>
      <Header />
     {/* ////////////////////////////////////////////////////////////////*/}
       {/* <Liste color ='blue' font='bold'/> */}
      {/* <Cards /> */}
      {/* < Produit props = {produits} /> */}
      {/* <button onClick ={this.change}> Click to change values </button> */}
      {/* <h2 style = {{color : "blue",fontSize : "20px",padding : "15px"}}> */}
         {/* {this.state.name}  {this.state.Prenom} */}
      {/* </h2> */}
      {/* <p> { this.state.cont} </p> */}
     {/* ////////////////////////////////////////////////////////////////*/}

      <Ex/>
    </div>
  );
}
}
