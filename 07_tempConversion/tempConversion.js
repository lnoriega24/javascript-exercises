const ftoc = function(temp) {
    temp = (temp - 32)*(5 / 9);
  return parseFloat(temp.toFixed(1));
};

const ctof = function(temp) {
    temp = ((temp* 9 / 5) + 32);
  return parseFloat(temp.toFixed(1));
};

ftoc(0);
ctof(0);

module.exports = {
  ftoc,
  ctof
};
