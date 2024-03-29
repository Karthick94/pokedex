import React, { Component } from 'react';
import PokeDex from './PokeDex';
import './PokeGame.css';

class PokeGame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randIndex, 1)[0];
            hand1.push(randomPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
        let isWinner1 = (exp1 > exp2) ? true : false;
        return (
            <div>
                <h1 className="pokegame-header">PokeDex!</h1>
                <PokeDex pokemon={hand1} exp={exp1} isWinner={isWinner1} />
                <PokeDex pokemon={hand2} exp={exp2} isWinner={!isWinner1} />
            </div>
        );
    }
}

export default PokeGame;