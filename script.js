const irregularVerb = [
  {
    infinitive: 'be',
    past_simple: 'was, were',
    past_participle: 'been',
    third_person: 'is, are',
    present_participle: 'being',
    lingue: {
      ita: 'Essere'
    }
  },
  {
    infinitive: 'become',
    past_simple: 'became',
    past_participle: 'become',
    third_person: 'becomes',
    present_participle: 'becoming',
    lingue: {
      ita: 'Diventare'
    }
  },
  {
    infinitive: 'begin',
    past_simple: 'began',
    past_participle: 'begun',
    third_person: 'begins',
    present_participle: 'beginning',
    lingue: {
      ita: 'Iniziare'
    }
  },
  {
    infinitive: 'blow',
    past_simple: 'blew',
    past_participle: 'blown',
    third_person: 'blows',
    present_participle: 'blowing',
    lingue: {
      ita: 'Soffiare'
    }
  },
  {
    infinitive: 'break',
    past_simple: 'broke',
    past_participle: 'broken',
    third_person: 'breaks',
    present_participle: 'breaking',
    lingue: {
      ita: 'Rompere'
    }
  },
  {
    infinitive: 'bring',
    past_simple: 'brought',
    past_participle: 'brought',
    third_person: 'brings',
    present_participle: 'bringing',
    lingue: {
      ita: 'Portare'
    }
  },
  {
    infinitive: 'build',
    past_simple: 'built',
    past_participle: 'built',
    third_person: 'builds',
    present_participle: 'building',
    lingue: {
      ita: 'Costruire'
    }
  },
  {
    infinitive: 'burst',
    past_simple: 'burst',
    past_participle: 'burst',
    third_person: 'bursts',
    present_participle: 'bursting',
    lingue: {
      ita: 'Scoppiare'
    }
  },
  {
    infinitive: 'buy',
    past_simple: 'bought',
    past_participle: 'bought',
    third_person: 'buys',
    present_participle: 'buying',
    lingue: {
      ita: 'Comprare'
    }
  },
  {
    infinitive: 'choose',
    past_simple: 'chose',
    past_participle: 'chosen',
    third_person: 'chooses',
    present_participle: 'choosing',
    lingue: {
      ita: 'Scegliere'
    }
  },
  {
    infinitive: 'catch',
    past_simple: 'caught',
    past_participle: 'have caught',
    third_person: 'catches',
    present_participle: 'catching',
    lingue: {
      ita: 'Catturare'
    }
  },
  {
    infinitive: 'come',
    past_simple: 'came',
    past_participle: 'have come',
    third_person: 'comes',
    present_participle: 'coming',
    lingue: {
      ita: 'Venire'
    }
  },
  {
    infinitive: 'deal',
    past_simple: 'dealt',
    past_participle: 'have dealt',
    third_person: 'deals',
    present_participle: 'dealing',
    lingue: {
      ita: 'Trattare'
    }
  },
  {
    infinitive: 'do',
    past_simple: 'did',
    past_participle: 'have done',
    third_person: 'does',
    present_participle: 'doing',
    lingue: {
      ita: 'Fare'
    }
  },
  {
    infinitive: 'dream',
    past_simple: 'dreamt',
    past_participle: 'have dreamt',
    third_person: 'dreams',
    present_participle: 'dreaming',
    lingue: {
      ita: 'Sognare'
    }
  },
  {
    infinitive: 'drink',
    past_simple: 'drank',
    past_participle: 'have drunk',
    third_person: 'drinks',
    present_participle: 'drinking',
    lingue: {
      ita: 'Bere'
    }
  },
  {
    infinitive: 'drive',
    past_simple: 'drove',
    past_participle: 'have driven',
    third_person: 'drives',
    present_participle: 'driving',
    lingue: {
      ita: 'Guidare'
    }
  },
  {
    infinitive: 'eat',
    past_simple: 'ate',
    past_participle: 'have eaten',
    third_person: 'eats',
    present_participle: 'eating',
    lingue: {
      ita: 'Mangiare'
    }
  },
  {
    infinitive: 'fall',
    past_simple: 'fell',
    past_participle: 'have fallen',
    third_person: 'falls',
    present_participle: 'falling',
    lingue: {
      ita: 'Cadere'
    }
  },
  {
    infinitive: 'feel',
    past_simple: 'felt',
    past_participle: 'have felt',
    third_person: 'feels',
    present_participle: 'feeling',
    lingue: {
      ita: 'Sentire'
    },
  },
  {
    infinitive: 'fight',
    past_simple: 'fought',
    past_participle: 'have fought',
    third_person: 'fights',
    present_participle: 'fighting',
    lingue: {
      ita: 'Combattere'
    }
  },
  {
    infinitive: 'find',
    past_simple: 'found',
    past_participle: 'have found',
    third_person: 'finds',
    present_participle: 'finding',
    lingue: {
      ita: 'Trovare'
    }
  },
  {
    infinitive: 'fly',
    past_simple: 'flew',
    past_participle: 'have flown',
    third_person: 'flies',
    present_participle: 'flying',
    lingue: {
      ita: 'Volare'
    }
  },
  {
    infinitive: 'forget',
    past_simple: 'forgot',
    past_participle: 'have forgotten',
    third_person: 'forgets',
    present_participle: 'forgetting',
    lingue: {
      ita: 'Dimenticare'
    }
  },
  {
    infinitive: 'forgive',
    past_simple: 'forgave',
    past_participle: 'have forgiven',
    third_person: 'forgives',
    present_participle: 'forgiving',
    lingue: {
      ita: 'Perdonare'
    }
  },
  {
    infinitive: 'freeze',
    past_simple: 'froze',
    past_participle: 'have frozen',
    third_person: 'freezes',
    present_participle: 'freezing',
    lingue: {
      ita: 'Congelare'
    }
  },
  {
    infinitive: 'get',
    past_simple: 'got',
    past_participle: 'have gotten',
    third_person: 'gets',
    present_participle: 'getting',
    lingue: {
      ita: 'Ottenere'
    }
  },
  {
    infinitive: 'give',
    past_simple: 'gave',
    past_participle: 'have given',
    third_person: 'gives',
    present_participle: 'giving',
    lingue: {
      ita: 'Dare'
    }
  },
  {
    infinitive: 'go',
    past_simple: 'went',
    past_participle: 'have gone',
    third_person: 'goes',
    present_participle: 'going',
    lingue: {
      ita: 'Andare'
    }
  },
  {
    infinitive: 'grow',
    past_simple: 'grew',
    past_participle: 'have grown',
    third_person: 'grows',
    present_participle: 'growing',
    lingue: {
      ita: 'Crescere'
    }
  },
  {
    infinitive: 'have',
    past_simple: 'had',
    past_participle: 'have had',
    third_person: 'has',
    present_participle: 'having',
    lingue: {
      ita: 'Avere'
    }
  },
  {
    infinitive: 'hear',
    past_simple: 'heard',
    past_participle: 'have heard',
    third_person: 'hears',
    present_participle: 'hearing',
    lingue: {
      ita: 'Sentire'
    }
  },
  {
    infinitive: 'hide',
    past_simple: 'hid',
    past_participle: 'have hidden',
    third_person: 'hides',
    present_participle: 'hiding',
    lingue: {
      ita: 'Nascondere'
    }
  },
  {
    infinitive: 'hold',
    past_simple: 'held',
    past_participle: 'have held',
    third_person: 'holds',
    present_participle: 'holding',
    lingue: {
      ita: 'Tenere'
    }
  },
  {
    infinitive: 'hurt',
    past_simple: 'hurt',
    past_participle: 'have hurt',
    third_person: 'hurts',
    present_participle: 'hurting',
    lingue: {
      ita: 'Ferire'
    }
  },
  {
    infinitive: 'keep',
    past_simple: 'kept',
    past_participle: 'have kept',
    third_person: 'keeps',
    present_participle: 'keeping',
    lingue: {
      ita: 'Tenere'
    }
  },
  {
    infinitive: 'know',
    past_simple: 'knew',
    past_participle: 'have known',
    third_person: 'knows',
    present_participle: 'knowing',
    lingue: {
      ita: 'Sapere'
    }
  },
  {
    infinitive: 'lay',
    past_simple: 'laid',
    past_participle: 'have laid',
    third_person: 'lays',
    present_participle: 'laying',
    lingue: {
      ita: 'Posare'
    }
  },
  {
    infinitive: 'lead',
    past_simple: 'led',
    past_participle: 'have led',
    third_person: 'leads',
    present_participle: 'leading',
    lingue: {
      ita: 'Guidare'
    }
  },
  {
    infinitive: 'leave',
    past_simple: 'left',
    past_participle: 'have left',
    third_person: 'leaves',
    present_participle: 'leaving',
    lingue: {
      ita: 'Lasciare'
    }
  },

    {
      infinitive: 'lie',
      past_simple: 'lay',
      past_participle: 'have lain',
      third_person: 'lies',
      present_participle: 'lying',
      lingue: {
        ita: 'Giacciare'
      }
    },
    {
      infinitive: 'lose',
      past_simple: 'lost',
      past_participle: 'have lost',
      third_person: 'loses',
      present_participle: 'losing',
      lingue: {
        ita: 'Perdere'
      }
    },
    {
      infinitive: 'make',
      past_simple: 'made',
      past_participle: 'have made',
      third_person: 'makes',
      present_participle: 'making',
      lingue: {
        ita: 'Fare'
      }
    },
    {
      infinitive: 'mean',
      past_simple: 'meant',
      past_participle: 'have meant',
      third_person: 'means',
      present_participle: 'meaning',
      lingue: {
        ita: 'Significare'
      }
    },
    {
      infinitive: 'meet',
      past_simple: 'met',
      past_participle: 'have met',
      third_person: 'meets',
      present_participle: 'meeting',
      lingue: {
        ita: 'Incontrare'
      }
    },
    {
      infinitive: 'pay',
      past_simple: 'paid',
      past_participle: 'have paid',
      third_person: 'pays',
      present_participle: 'paying',
      lingue: {
        ita: 'Pagare'
      }
    },
    {
      infinitive: 'read',
      past_simple: 'read',
      past_participle: 'have read',
      third_person: 'reads',
      present_participle: 'reading',
      lingue: {
        ita: 'Leggere'
      }
    },
    {
      infinitive: 'ride',
      past_simple: 'rode',
      past_participle: 'have ridden',
      third_person: 'rides',
      present_participle: 'riding',
      lingue: {
        ita: 'Cavalcare'
      }
    },
    {
      infinitive: 'rise',
      past_simple: 'rose',
      past_participle: 'have risen',
      third_person: 'rises',
      present_participle: 'rising',
      lingue: {
        ita: 'Salire'
      }
    },
    {
      infinitive: 'say',
      past_simple: 'said',
      past_participle: 'have said',
      third_person: 'says',
      present_participle: 'saying',
      lingue: {
        ita: 'Dire'
      }
    },
    {
      infinitive: 'see',
      past_simple: 'saw',
      past_participle: 'seen',
      third_person: 'sees',
      present_participle: 'seeing',
      lingue: {
        ita: 'Vedere'
      }
    },
    {
      infinitive: 'seek',
      past_simple: 'sought',
      past_participle: 'sought',
      third_person: 'seeks',
      present_participle: 'seeking',
      lingue: {
        ita: 'Cercare'
      }
    },
    {
      infinitive: 'sell',
      past_simple: 'sold',
      past_participle: 'sold',
      third_person: 'sells',
      present_participle: 'selling',
      lingue: {
        ita: 'Vendere'
      }
    },
    {
      infinitive: 'shake',
      past_simple: 'shook',
      past_participle: 'shaken',
      third_person: 'shakes',
      present_participle: 'shaking',
      lingue: {
        ita: 'Scuotere'
      }
    },
    {
      infinitive: 'shine',
      past_simple: 'shone',
      past_participle: 'shone',
      third_person: 'shines',
      present_participle: 'shining',
      lingue: {
        ita: 'Splendere'
      }
    },
    {
      infinitive: 'show',
      past_simple: 'showed',
      past_participle: 'shown',
      third_person: 'shows',
      present_participle: 'showing',
      lingue: {
        ita: 'Mostrare'
      }
    },
    {
      infinitive: 'sing',
      past_simple: 'sang',
      past_participle: 'sung',
      third_person: 'sings',
      present_participle: 'singing',
      lingue: {
        ita: 'Cantare'
      }
    },
    {
      infinitive: 'sit',
      past_simple: 'sat',
      past_participle: 'sat',
      third_person: 'sits',
      present_participle: 'sitting',
      lingue: {
        ita: 'Sedere'
      }
    },
    {
      infinitive: 'sleep',
      past_simple: 'slept',
      past_participle: 'slept',
      third_person: 'sleeps',
      present_participle: 'sleeping',
      lingue: {
        ita: 'Dormire'
      }
    },
    {
      infinitive: 'speak',
      past_simple: 'spoke',
      past_participle: 'spoken',
      third_person: 'speaks',
      present_participle: 'speaking',
      lingue: {
        ita: 'Parlare'
      }
    },
    {
      infinitive: 'spend',
      past_simple: 'spent',
      past_participle: 'spent',
      third_person: 'spends',
      present_participle: 'spending',
      lingue: {
        ita: 'Spendere'
      }
    },
    {
      infinitive: 'stand',
      past_simple: 'stood',
      past_participle: 'stood',
      third_person: 'stands',
      present_participle: 'standing',
      lingue: {
        ita: 'Stare in piedi'
      }
    },
    {
      infinitive: 'steal',
      past_simple: 'stole',
      past_participle: 'stolen',
      third_person: 'steals',
      present_participle: 'stealing',
      lingue: {
        ita: 'Rubare'
      }
    },
    {
      infinitive: 'swim',
      past_simple: 'swam',
      past_participle: 'swum',
      third_person: 'swims',
      present_participle: 'swimming',
      lingue: {
        ita: 'Nuotare'
      }
    },
    {
      infinitive: 'swing',
      past_simple: 'swung',
      past_participle: 'swung',
      third_person: 'swings',
      present_participle: 'swinging',
      lingue: {
        ita: 'Dondolare'
      }
    },
    {
      infinitive: 'take',
      past_simple: 'took',
      past_participle: 'taken',
      third_person: 'takes',
      present_participle: 'taking',
      lingue: {
        ita: 'Prendere'
      }
    },
    {
      infinitive: 'teach',
      past_simple: 'taught',
      past_participle: 'taught',
      third_person: 'teaches',
      present_participle: 'teaching',
      lingue: {
        ita: 'Insegnare'
      }
    },
    {
      infinitive: 'tell',
      past_simple: 'told',
      past_participle: 'told',
      third_person: 'tells',
      present_participle: 'telling',
      lingue: {
        ita: 'Dire'
      }
    },
    {
      infinitive: 'think',
      past_simple: 'thought',
      past_participle: 'thought',
      third_person: 'thinks',
      present_participle: 'thinking',
      lingue: {
        ita: 'Pensare'
      }
    },
    {
      infinitive: 'throw',
      past_simple: 'threw',
      past_participle: 'thrown',
      third_person: 'throws',
      present_participle: 'throwing',
      lingue: {
        ita: 'Lanciare'
      }
    },
    {
      infinitive: 'understand',
      past_simple: 'understood',
      past_participle: 'understood',
      third_person: 'understands',
      present_participle: 'understanding',
      lingue: {
        ita: 'Capire'
      }
    },
    {
      infinitive: 'wear',
      past_simple: 'wore',
      past_participle: 'worn',
      third_person: 'wears',
      present_participle: 'wearing',
      lingue: {
        ita: 'Indossare'
      }
    },
    {
      infinitive: 'win',
      past_simple: 'won',
      past_participle: 'won',
      third_person: 'wins',
      present_participle: 'winning',
      lingue: {
        ita: 'Vincere'
      }
    },
    {
      infinitive: 'write',
      past_simple: 'wrote',
      past_participle: 'written',
      third_person: 'writes',
      present_participle: 'writing',
      lingue: {
        ita: 'Scrivere'
      }
    }
];

let listaDiCarte = document.querySelector('.carte');

for (let i = 0; i < 25; i++){
  let x = document.createElement('div');
  x.classList.add('carta');

  let y = `
   <div class="front">
   <p>
   ${irregularVerb[i].lingue.ita}
   </p>
  </div>
  <div class="back">
    <p>${irregularVerb[i].infinitive}</p>
    <p>${irregularVerb[i].past_simple}</p>
    <p>${irregularVerb[i].past_participle}</p>
    <p>${irregularVerb[i].third_person}</p>
    <p>${irregularVerb[i].present_participle}</p>
  </div>
  `
  x.innerHTML = y;
  listaDiCarte.appendChild(x)
}

let listaDiCarte2 = document.querySelector('.carte2');
for (let i = 25; i < 50; i++){
  let x = document.createElement('div');
  x.classList.add('carta');

  let y = `
   <div class="front">
   <p>
   ${irregularVerb[i].lingue.ita}
   </p>
  </div>
  <div class="back">
    <p>${irregularVerb[i].infinitive}</p>
    <p>${irregularVerb[i].past_simple}</p>
    <p>${irregularVerb[i].past_participle}</p>
    <p>${irregularVerb[i].third_person}</p>
    <p>${irregularVerb[i].present_participle}</p>
  </div>
  `
  x.innerHTML = y;
  listaDiCarte2.appendChild(x)
}








var cards = document.querySelectorAll(".carta");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("flip")) {
        card.classList.add("flip");
        setTimeout(() => {
          // card.style.display = 'none';
          // card.classList.add("animate__slideOutRight");
          // card.style.display = "none";
        }, 5000);
      }
    });
  });


//   const card = document.querySelector('.card_inner'); 

// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');

// });


// let bo = $('head').append('<link rel="stylesheet" type="text/css" href="style.css">');




const irregularVerbList = `be, become, begin, blow, break,bring, build,burst, buy,choose,
 catch, come, deal,do, dream, drink, drive, eat, fall, feel,
  fight, find, fly, forget, forgive, freeze, get, give, go, grow,
   have, hear, hide, hold, hurt, keep , know, lay, lead, leave,
    lie, lose, make, mean, meet, pay, read, ride, rise, say,
     see, seek, sell, shake, shine, show, sing, sit, sleep, speak,
      spend, stand, steal, swim, swing, take , teach, tell, think,
       throw, understand, wear, win, write`


       
// questa funzione si attiva quando un bottone di espandi viene
//  premuto la funziona passa dei parametri che identificano il pulsante cosi puo essere usata per ogni aggiuntivo pulsante 

       function myFunction(x) {
        const contenitoreCarte = document.querySelector(x);
        let contenitoreCarteProva = document.querySelector(x).children;

         contenitoreCarte.classList.toggle("aperto");
         if(contenitoreCarte.classList.contains('aperto')) {
           contenitoreCarte.previousElementSibling.textContent = "Riduci";
           
            //  for (let i = 0; i < contenitoreCarteProva.length; i++) {
            //   contenitoreCarteProva[i].classList.remove('flip') ;
            //  } 
          
         } else {

          
           contenitoreCarte.previousElementSibling.textContent = "Espandi";
          
          for (let i = 0; i < contenitoreCarteProva.length; i++) {
             
            contenitoreCarteProva[i].classList.remove('flip')
           }
         }
       }








