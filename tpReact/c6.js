import produits from "./liste.produits";
function c6 ()
{
const totalStock = produits.reduce( (t,p)=> {return t+=p.stock},0);
return <h1>le stock total actuel est :{totalStock} </h1>
}

//creer un composant c61 qui retourne le plus grand prix,ainsi que le nom du produit le plus cher
function c61 ()

{ const maxPrix = produits.reduce( (max,p)=>{
   if (p.prix>max) 
    max =p.prix;
    return max;
 } , 0 );
 const produitcher= produits.find (p=>p.prix===maxPrix);
 return <h1> le prix maximal {maxPrix }<br/>
 le nom du produit maximal est : { produitcher.designation} </h1>
  }
export default c61 ;