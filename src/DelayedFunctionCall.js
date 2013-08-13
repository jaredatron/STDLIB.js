DelayedFunctionCall = function DelayedFunctionCall(_function, delay){
  this.start     = Date.now();
  this.delay     = delay * 1000 || 0;
  this.called    = false;
  this.prevented = false;
  this.call      = call;
  this.timeout   = setTimeout(this.call, this.delay);

  function call(){
    if (this.called || this.prevented) return;
    this.called = Date.now();
    _function();
  }
}

DelayedFunctionCall.prototype.prevent = function() {
  if (!this.called && !this.prevented){
    this.prevented = Date.now();
    clearTimeout(this.timeout);
  }
  return this;
};

DelayedFunctionCall.prototype.elapsed = function() {
  return (this.prevented || this.called || Date.now()) - this.start;
};

DelayedFunctionCall.prototype.eta = function() {
  return this.called || this.prevented ? null :
  this.delay - this.elapsed();
};
