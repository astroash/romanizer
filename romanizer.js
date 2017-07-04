var values = [
  {
    arabic:1000,
    roman:'M',
  },
  {
    arabic:100,
    roman:'C'
  },
  {
    arabic:90,
    roman:'XC'
  },
  {
    arabic:50,
    roman:'L',
  },
  {
  arabic:40,
  roman:'XL',
  },
  {
    arabic:10,
    roman:'X',
  },
  {
    arabic: 9,
    roman:'IX',
  },
  {
    arabic: 5,
    roman:'V',
  },

  {
    arabic: 4,
    roman:'IV',
  },
  {
    arabic:1,
    roman:'I',
  }
]

function romanizer(num){
  var result = '';
  var remaining = num;

  if (num>= 5000|| num<=0){
    return 'Sorry the Roman\'s didn\'t count that well';
  }

  values.forEach(function(value) {
    while (remaining >= value.arabic){
      result += value.roman;
      remaining -= value.arabic;
    }
  });
  return result;
  // example4
  // if (result === 0){
  //   console.log(result)
  // }

};

// Example2
// Example3

// if (typeof module !== 'undefined'){
//   module.exports=romanizer;
// }
module.exports=romanizer

// Example1
// function makeJam(sugar,fruit){
//   return sugar + fruit;
// }

/* istanbul ignore next */
