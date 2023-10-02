module.exports = function reverse (n) {
    n = Math.abs(n);
  const hundred = Math.floor(n/100);
  const dec = Math.floor((n%100)/10);
  const unit = n%10;

  return (unit*100 + dec*10 + hundred);
}
