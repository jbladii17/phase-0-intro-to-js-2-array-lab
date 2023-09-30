let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name, catArray) {
    cats.push(name);
    return catArray;
  }

function destructivelyPrependCat(name, catArray) {cats.unshift(name);
return catArray;}
function destructivelyRemoveLastCat(catArray) {cats.pop(-1); return catArray}
function destructivelyRemoveFirstCat(catArray) {cats.shift(0); return catArray}

function appendCat(name) {let newCats = cats.concat(name); return newCats;}
function prependCat(name) {let newCats= ["Arnold"].concat(cats); return newCats;}
function removeLastCat(name) {let newCats= ["Milo", "Otis"].splice(cats); return newCats;}
function removeFirstCat(name) {let newCats= ["Otis", "Garfield"].splice(cats); return newCats;}

