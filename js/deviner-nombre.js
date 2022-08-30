/**
* Jeu du nombre mystère
* @author  Amine Sebaoun 2eme du nom
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    let nbMystere = tireNombre(0,100);
    let nbEssai = 0;
    let message = 'Choissiez un nombre';
    let reponse = 0;

    do {
        reponse = prompt(message);
        if (parseInt(reponse) < parseInt(nbMystere)){
            message = 'c\'est plus grand';
        }else if (parseInt(reponse) > parseInt(nbMystere)){
            message = 'c\'est plus petit';
    }
        nbEssai+=1;
    }while (parseInt(reponse) !== parseInt(nbMystere));
    alert('vous avez trouvé après ' + nbEssai + ' essais');

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}()); // main IIFE