import React from "react";

export default class JeuDe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }

    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1;
        /*Had ligne katgeneri nombre bin 1 w 6*/
        this.setState({
            face: valeur,
            compteur: this.state.compteur + 1,
            fin: valeur === this.props.cache

            /*- face: valeur kat7et résultat f state.
        - compteur + 1 katzid essai wa7ed.
        - fin: valeur === this.props.cache katverifi wach lface li khrejat hiya lface cachée.
        B. this.props.cache
        F index.js, khassek t3ti valeur cachée l component:*/
    });

    }
    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }
    getImage() {

        if (this.state.face === null) {
            return "/images/JEUDE/face1.PNG";
        }
        return "/images/JEUDE/face" + this.state.face + ".PNG";
       /* Ila face = 4, résultat ghadi ykoun:
/images/face4.PNG*/
    }



    render() {
        const styleImage = { width: "60px", height: "60px" };
        return (
            <div>
                <img src="/images/jeude/De.PNG" alt="De" />
                <h1>Jeu de Dé...</h1>
                <h2>face:</h2>
                <img src={this.getImage()} style={styleImage} alt="De"/>
                <h2>nombre d'essais:</h2>


                <button onClick={() => this.jouer()}>jouer</button>


                {this.state.fin && (
                    <>
                <p>Bravo vous avez trouvez la face cachée.....</p>
                <button onClick={() => this.initialiser()}>Initialiser</button>
          </> 
          )} 
          </div>
        );
    }


}
