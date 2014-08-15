require("Array/indexOf");

if (!Array.prototype.uniq){
  Array.prototype.uniq = function(){
    var array = [], i=0, member;
    while(i < this.length){
      member = this[i]
      if (array.indexOf(member) === -1) array.push(member);
      i++;
    };
    return array;
  };
}
