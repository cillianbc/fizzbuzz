
function fizzBuzz(entry){
  for (i=1; i <= entry; i++){
    if (i % 3 === 0)
      $('body ul').append("<li>Fizz</li>").text();
    else if (i % 5 === 0)
      $('body ul').append("<li>Fizz</li>").text();
    else 
      $('body ul').append("<li>"+i+"</li>").text();
}};
var entry = prompt('Enter a number between 1 & 100');
fizzBuzz(entry);