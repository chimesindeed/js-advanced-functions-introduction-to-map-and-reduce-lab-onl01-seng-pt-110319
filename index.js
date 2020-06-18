// Your code here

function mapToNegativize(src){
  let arr = [];
  for (let i = 0; i < src.length; i++){
  arr.push (src[i] * -1)
  }
  return arr;
}

function mapToNoChange(src){
  let arr = [];
  for (let i = 0; i < src.length; i++){
  arr.push (src[i])
  }
  return arr;
}
function mapToDouble(src){
  let arr = [];
  for (let i = 0; i < src.length; i++){
  arr.push ( 2 * src[i])
  }
  return arr;
}
function mapToSquare(src){
  let arr = [];
  for (let i = 0; i < src.length; i++){
  arr.push (src[i] * src[i])
  }
  return arr;
}
