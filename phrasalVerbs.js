const tonguePhrasalVerb = 
    {
        1: ['to speak up','to express your opinion'],
        2: ['to speak out',' to publicly speak in protest'],
        3: ['to speak your mind','to tell people what you think'],
        4: ['to talk back', 'to replay rudely to someone'],
        5: ['to talk down to someone', 'to speak with someone as though they are less important than you are'],
        6: ['to talk someone into', 'to convince someone to do something']
    }

const tongueIdioms = {
    1: ['byte your tongue', 'when someone stops themselves from saying what they really think'],
    2: ['on the tip of your tongue', 'you are sure you know a word or answer but have difficulty finding it'],
    3: ['cat got your tongue?', 'an expression used to get someone to speak'],
    4: ['tongue-tied', 'difficulty expressing yourself because you are nervous or embarrassed'],
    5: ['slip of the tongue', 'a small spken error or mistake']

}

let listaDiCarte2 = document.querySelector('.carte2');



for (const g in tonguePhrasalVerb){
    
  let x = document.createElement('div');
  x.classList.add('carta');

  let y = `
   <div class="front">
   <p>
   ${tonguePhrasalVerb[g][0]}
   </p>
  </div>
  <div class="back">
    ${tonguePhrasalVerb[g][1]}
  </div>
  `
  x.innerHTML = y;
  listaDiCarte2.appendChild(x)
}




// to come into your own 
// to hit the mark 
// to be down in the dumps 