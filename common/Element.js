let Element = {
  extend: function(config) {
    let tmp = Object.create(this);
    for (let key in config) {
      tmp[key] = config[key];
    }
    return tmp;
  }
};
module.exports = Element;