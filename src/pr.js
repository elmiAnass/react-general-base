import React from "react";
import Cards from "../cards";


export default  function Produit (props){
  const parfums = [
    {
    id: 1,
    genre: 'EXTRAIT CO2',
    titre : '  GRENADE BIO',
    pays: 'Punica granatum -Turque' ,
    description : 'Cette huile extraite par CO2 supercritique est particulièrement concentrée en acide punicique, connu pour ses propriétés apaisantes puissantes. Cest un actif précieux pour préparer des soins pour peaux sensibles et des soins anti-âge. ',
    contenance : [ '100 ml – 3,96 €', '260 ml – 6,95 €', '1 L – 19,95 €'],
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7EDEEXFB2ZvNelpqtdBV3t1xAC2uaTM51OzXCsGnf2hDUrLq5IWkz41tivdI2Fpxdqs&usqp=CAU',
    prix: '4,95 €'
    },
    {
    id: 2,
    genre: 'HUILE VEGETALE',
    titre : ' ABRICOT',
    pays: 'Prunus armeniaca-Pressage Maroc' ,
    description : 'Extraite des noyaux dabricot, cette huile est connue pour ses effets anti-âge et assouplissant. Elle donne une bonne mine et constitue un excellent ingrédient pour préparer des mélanges dhuiles essentielles ou des huiles de massage.',
    contenance : [ '100 ml – 3,96 €', '260 ml – 6,95 €', '1 L – 19,95 €'],
    image : 'https://www.joveychic.net/ecdata/stores/EHTAL569/image/cache/data/products/1614077498_196-600x600.jpg',
    prix: '3,95 €'
    },
    ];
    const produits = parfums.map(elm =><Cards {...elm} /> )
    return(
     <div>
      {produits}
     </div>
    )
   
}

