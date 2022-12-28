module.exports = function reverse (n) {
  const str = String(n);
  const deleteMinus = str.replace("-", "").split("").reverse().join("");
 return Number(deleteMinus);

}
