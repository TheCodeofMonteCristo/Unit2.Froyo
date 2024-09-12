/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/


const froyoFlavorMachine = prompt(
    "Please enter the Froyo flavors you would like to order seperated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

console.log('We all enjoy Ice Cream and Frozen Yogurt');

//Receive Input


const selectedFlavors = froyoFlavorMachine.split(',');
console.log(selectedFlavors);

//Transform to an Array of Strings 




/**
 * 
 * @param {array} bestTasting 
 * @returns {object} 
 */

function findFroyo(bestTasting) {
    const iceCream = {};
    for (let i = 0; i < bestTasting.length; i++) {
        let froyoVisit = bestTasting[i];
        if (froyoVisit in iceCream) {
            flavors[froyoVisit] += 1;
        } else {
            iceCream[froyoVisit] = 1;
        }
    }
    return iceCream;
}

console.log(findFroyo(selectedFlavors));




//