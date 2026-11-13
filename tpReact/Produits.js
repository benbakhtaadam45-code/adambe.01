import produits from "./liste.produits";
import Produit from "./Produit";
export default function Produits() {
  return (
    <div style={{display:'flex',flexWrap:'wrap'} }>
      {produits.map((p) => (
        <Produit  key={p.ref}  refProduit={p.ref} image={p.Image} 
         designation={p.designation}  prix={p.prix} 
        />
      ))}
    </div>
  );
 }
 //flexWrap:'wrap',justifyContent:'space-between',gap:'10px',textAlign:'center