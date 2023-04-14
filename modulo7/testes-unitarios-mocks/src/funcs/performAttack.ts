import { Character } from "../model/character";


// ------- Desta forma fica dependente da outra função para funcionar (dependente de outro arquivo)
// import { validateCharacter } from "./validateCharacter";
// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };


// ------ Se torna independente de outras mais facil de achar erros
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};