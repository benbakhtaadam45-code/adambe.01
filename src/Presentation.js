export default function presentation (props){
    console.log(props)
    return(<div>
        <h1>salut {props.prenom} {props.prenom}</h1><hr/>
        <h3> ses diplomes.map</h3>
        <ul>{props.diplomes.map (a=><li>{a}</li>)}</ul>
        <hr></hr>
    </div>

    )
}