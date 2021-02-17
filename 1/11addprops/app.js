function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
for(let prop in beagle){
    if(!(prop in Dog.prototype))
        ownProps.push(prop);
}

for(let prop in Dog.prototype){
    prototypeProps.push(prop)
}
console.log();