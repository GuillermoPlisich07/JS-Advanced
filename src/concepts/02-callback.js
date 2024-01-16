import { heroes } from "../data/hero";

/**
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = (element) =>{

    console.log('callbackComponent');

    const id = '5d86371fd55e2e2a30fe1ccb12';
    findHero(id,(error,hero1)=>{

        if(error){
            element.innerHTML=error;
            return;
        }


        element.innerHTML  = hero1.name;
    });
};


/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Objet)=>void} callback 
 */
const findHero = (id,callback)=>{
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return;
    }

    callback(null, hero);
};