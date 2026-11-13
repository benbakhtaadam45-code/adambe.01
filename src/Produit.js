import listeProduits from "./listeProduits";
import Produit from "./Produit";

export default function Produits() {
  return (
    <div>
      {listeProduits.map((p) => (
        <Produit
          key={p.ref}
          image={p.image}
          prix={p.prix}
          designation={p.designation}
        />
      ))}
    </div>
  );
}