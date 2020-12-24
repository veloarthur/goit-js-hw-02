const findLongestWord = function(string) {
  const arrayToString = string.split(' ');
  
  let largrestNumber = arrayToString[0];
  for (let i = 1; i < arrayToString.length; i += 1) {
    if (arrayToString[i].length > largrestNumber.length) {
     largrestNumber = arrayToString[i]
    }
    
  }
  return largrestNumber;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 
