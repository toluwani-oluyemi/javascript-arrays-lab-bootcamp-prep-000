var kittens = ["Milo", "Otis", "Garfield"]
//define your array here

function destructivelyAppendKitten(name)
{
  kittens.push("Ralph")
}
function destructivelyPrependKitten(name)
{
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name)
{
  kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift("Milo")
}
function appendKitten(name)
{
  var newKitten = ["Broom"]
var newCats = kittens.concat(newKitten);
return newCats
}
function prependKitten(name)
{
  var newCat = ["Arnold"]
  var newCats = kitten.splice(0,0,"Arnold")
  return newCats
}

