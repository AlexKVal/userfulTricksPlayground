function Ninja(){
  this._parentSwitnSword = this.swingSword;

  this.swingSword = function(){
    console.log('Ninja swingSword');
    this._parentSwitnSword();
  };
}

// Should return false, but will be overridden
Ninja.prototype.swingSword = function(){
  console.log('proto swingSword');
};

var ninja = new Ninja();

ninja.swingSword();
