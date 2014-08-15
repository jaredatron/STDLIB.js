//= require Object.each
//= require Object.clone
//= require Object.keys
//= require Object.values

function Hash(object){
  if (!Object.isObject(object)) object = {};
  this._object = Object.clone(Hash.toObject(object));
}

Hash.toObject = function(object) {
  return Object.isFunction(object.toObject) ? object.toObject() : object;
}

Hash.prototype.each = function(iterator, context) {
  Object.each(this._object, iterator, context);
  return this;
};

Hash.prototype.set = function(key, value) {
  return this._object[key] = value;
};

Hash.prototype.get = function(key) {
  if (Object.prototype.hasOwnProperty.call(this._object, key))
    return this._object[key];
};

Hash.prototype.unset = function(key) {
  var value = this._object[key];
  delete this._object[key];
  return value;
};

Hash.prototype.toObject = function() {
  return Object.clone(this._object);
};

Hash.prototype.keys = function() {
  return Object.keys(this._object);
};

Hash.prototype.values = function() {
  return Object.values(this._object);
};

Hash.prototype.update = function(object) {
  Object.extend(this._object, Hash.toObject(object));
  return this;
};

Hash.prototype.clone = function(object) {
  return new this.constructor(this._object);
};

Hash.prototype.merge = function(object) {
  return this.clone().update(object);
};

Hash.prototype.size = function(object) {
  return this.keys().length;
};

Hash.prototype.map = function(iterator, context) {
  var mapping = [];
  this.each(function(key, value){
    mapping.push(iterator.call(context, [key, value]));
  });
  return mapping;
};
