import React from "react";



export default function Cards (id,genre,title,pays,descriptions,image) {
    return(
      <div>
       <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <img src={image} className={"img-card-top"}/>
        <p class="card-text">{descriptions}</p>
        <p class="card-text"> id produit {id}</p>
        <p class="card-text"> pay :  {pays}</p>
        <p class="card-text"> genre :  {genre}</p>
        <a href="#" class="btn btn-primary">+</a>
        <p> 1 </p>
        <a href="#" class="btn btn-primary">-</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <img src={image} className={"img-card-top"}/>
        <p class="card-text">{descriptions}</p>
        <p class="card-text"> id produit {id}</p>
        <p class="card-text"> pay :  {pays}</p>
        <p class="card-text"> genre :  {genre}</p>
        <a href="#" class="btn btn-primary">+</a>
        <p> 1 </p>
        <a href="#" class="btn btn-primary">-</a>
      </div>
    </div>
  </div>

</div>
      </div>
    )
  }
