export default function Produit({ image, designation, prix }) {
  return (
    <div className="produit-card">
      <img src={image} alt={designation} />
      <h3>{designation}</h3>
      <p>{prix} DH</p>
    </div>
  );
}