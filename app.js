function fizzBuzz() {
  var entry = prompt('Enter a number between 1 & 100');
  if (isNaN(entry)){
        alert("Please enter a number")
        fizzBuzz();
  }
  else {
    for (i = 1; i <= entry; i++){
      if (i % 3 === 0 && i % 5===0)
        $('body').append("<li>FizzBuzz</li>");
      else if (i % 3 ===0)
        $('body').append("<li>Fizz</li>");
      else if (i % 5 === 0)
        $('body').append("<li>Buzz</li>");
      else
        $('body').append("<li>"+i+"</li>");
    }
  }
}
fizzBuzz();
