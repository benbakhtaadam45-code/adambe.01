export default function Produit(props)
{
   return(
    <div style={{background:'grey',width:'250px',height:'250',textAlign:'center',borderRadius:'20px',
      margin:'50px',padding:'10px'}}>
        <img src={props.image} alt="hp" width="100"/>
         <h2>{props.refProduit}</h2>
         <p>{props.designation}</p>
         <p>prix:{props.prix}</p>
        </div>
    )
}