//Definimos una interface ya que solo vamos a definir propiedades
//pokemon.model.ts: Al ser un modelo asegura  q los datos

import { IStat } from "./stats.model";


export interface PokemonModel {
    id: number;
    name: string;
    type1: string
    type2: string
    sprite: string;
    height: number;
    weight: number;
    abilities: string[];
    hidenAbility? : string;
    stats: IStat [];
   /* stats: {
        base_stat: number
        name : string;
    }*/
   
  
}
