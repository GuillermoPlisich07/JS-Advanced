import { heroes } from "../data/hero";

/**
 * @param {HTMLDivElement} element 
 */
export const promisis = (element) =>{

    const renderHero = (hero) =>{
        element.innerHTML = hero.name;
    }

    const renderError = (error) =>{
        element.innerHTML = error;
    }

    const renderTwoHeroes = (hero1,hero2)=>{
        element.innerHTML = `${hero1.name}<br>${hero2.name}`
    };

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f1efebc31def272e2';

    //! Lo recomendable en caso de Promise Hell
    Promise.all([
        findHero(id2),
        findHero(id1)
    ]).then(([hero1,hero2])=>renderTwoHeroes(hero1,hero2))
    .catch(renderError);

    
    //! Otra forma de resolver el promise hell pero no muy recomendable
    // let hero1;
    // findHero(id1)
    //     .then(hero =>{
    //         hero1=hero;
    //         return findHero(id2)
    //     })
    //     .then(hero2 =>{
    //         renderTwoHeroes(hero1,hero2);
    //     })
    //     .catch(renderError)

    //! PROMISE HELL
    // findHero(id1)
    //     .then((hero1)=>{
    //         findHero(id2)
    //             .then(hero2=>{
    //                 renderTwoHeroes(hero1,hero2)
    //             })
    //             .catch(renderError)
    //     })
    //     .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise} 
 */
const findHero = (id) => {
    return new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;

        }

        reject(`Hero with id ${id} not found`);
    });

}