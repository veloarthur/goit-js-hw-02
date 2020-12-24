const formatString = function(string) {
  if (string.length > 40) {
    let arrayOfLiters = string.split('');
    arrayOfLiters.splice(40, Infinity, '...');
    const newString = arrayOfLiters.join('');
        return newString;
   } 
   else {
     return string;
   }
 }
 console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
 console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
 console.log(formatString('Curabitur ligula sapien.'));
 console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);