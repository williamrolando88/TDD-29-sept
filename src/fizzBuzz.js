const fizzBuzz = (maxValue = 100, minValue = 1) => {
  let fizzBuzzArray = []

  for (let i = 0; i < maxValue; i++) {
    if (validate3(i + 1)) {
      if (validate5(i + 1)) {
        fizzBuzzArray[i] = "FizzBuzz";
        continue;
      }
      fizzBuzzArray[i] = "Fizz";
    } else if (validate5(i + 1)) {
      fizzBuzzArray[i] = "Buzz";
    } else {
      fizzBuzzArray[i] = i + 1;
    }
  }

  return fizzBuzzArray;
}


function validate3(number) {
  return ((number + minValue) % 3 === 0)
}

function validate5(number) {
  return (number % 5 === 0)
}




module.exports = fizzBuzz