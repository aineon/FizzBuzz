function fizzBuzz(number) {
    if(typeof(number) % 3 === 0 && typeof(number) % 5 === 0) {
        return "Fizz Buzz";
    } else if(typeof(number) % 3 === 0) {
          return "Fizz";   
    } else if(typeof(number) % 5 === 0) {
          return "Buzz";
    } else {
        return number;
    }
}