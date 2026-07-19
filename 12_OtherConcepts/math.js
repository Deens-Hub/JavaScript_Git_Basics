//direct export allows us to export multiple values from a module. We can use the direct export to export the add and subtract functions from the math.js module like this:
export function add(a, b) {
  return a + b;
}   

export function subtract(a, b) {
  return a - b;
}       

function multiply(a, b) {
  return a * b;
}  

//default export allows us to export a single value from a module. We can use the default export to export the multiply function from the math.js module like this:
export default multiply;

