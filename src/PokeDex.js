import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './PokeDex.css';
// import uniqueId from 'react-html-id';

class pokeDex extends Component {
    // constructor() {
    //     super();
    //     uniqueId.enableUniqueIds(this);
    // }
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
        return (
            <div className="PokeDex">
                <h1>PokeDex!</h1>
                <div className="pokedex-card">
                    {this.props.pokemon.map(pokemon => {
                        return <PokeCard name={pokemon.name} key={pokemon.id} id={pokemon.id} type={pokemon.type} base_experience={pokemon.base_experience} />
                    })}
                </div>
            </div>
        );
    }
}

export default pokeDex;