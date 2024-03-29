import React, { Component } from 'react';
import './PokeCard.css'

// let POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
let POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class PokeCard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="PokeCard">
                <h2>{this.props.name}</h2>
                <img src={imgSrc} alt={this.props.name} />
                <div className="pokecard-data">Type: {this.props.type}</div>
                <div className="pokecard-data">Exp : {this.props.base_experience}</div>
            </div>
        );
    }
}

export default PokeCard;