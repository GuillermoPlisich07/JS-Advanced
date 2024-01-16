import { heroes } from "../data/hero";

/**
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) =>{

    const id = '5d86371f1efebc31def272e2';

    findHero(id)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error );
}

/**
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async(id) => {
   
    const hero= heroes.find( hero => hero.id === id );

    return hero.name;

}