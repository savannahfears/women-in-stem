var factsArray = ["I was a governess when i was 16.", "I was a member of the WSPU (Women's Social Political Union.)", "I helped found the International Federation of University Women in 1919 and the National Union of Scientific Workers in 1920.",
"I died of blood poisoning in 1923", "I published a paper (The Origin and Growth of Ripple Marks) and this was later published in the Proceedings of the Royal Society.", "In 1906, I was awarded the Royal Society's prestigious Hughes Medal for my experimental investigations on the electric arc, and also on sand ripples.",
"I spoke at the International Electrical Congress in Paris in 1900", "In 1895, I wrote a series of articles for the Electrician, explaining that these phenomena were the result of oxygen coming into contact with the carbon rods used to create the arc.", "I put my mathematical skills to practical use – I taught at Notting Hill and Ealing High School"];


  var factsOutPut = $('.factsOutPut');
var factsButton= $('.facts');
  factsButton.on('click', printFacts);

function printFacts() {
  var firstFact = Math.random();
  var multipliedFacts = firstFact * factsArray.length;
  var roundedFacts = Math.floor(multipliedFacts);
  var randomFacts = factsArray[roundedFacts];

  console.log(factsOutPut);
  factsOutPut.text(randomFacts);
}


var submitButton = $('.submitButton');
  submitButton.on('click', printSubmit);

  function printSubmit() {

      var userInput = $('.input').val();
      var inputPlace = $('.inputSelection');

      inputPlace.append(`
        <div class="commentBox">
          <p>${userInput}</p>

        </div>
        `);
  }
