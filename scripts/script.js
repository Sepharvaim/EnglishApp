






// const irregularVerbList = `be, become, begin, blow, break,bring, build,burst, buy,choose,
//  catch, come, deal,do, dream, drink, drive, eat, fall, feel,
//   fight, find, fly, forget, forgive, freeze, get, give, go, grow,
//    have, hear, hide, hold, hurt, keep , know, lay, lead, leave,
//     lie, lose, make, mean, meet, pay, read, ride, rise, say,
//      see, seek, sell, shake, shine, show, sing, sit, sleep, speak,
//       spend, stand, steal, swim, swing, take , teach, tell, think,
//        throw, understand, wear, win, write`


       
// questa funzione si attiva quando un bottone di espandi viene
//  premuto la funziona passa dei parametri che identificano il pulsante cosi puo essere usata per ogni aggiuntivo pulsante 

       function myFunction(x) {
        const contenitoreCarte = document.querySelector(x);
        let contenitoreCarteProva = document.querySelector(x).children;

         contenitoreCarte.classList.toggle("aperto");
         if(contenitoreCarte.classList.contains('aperto')) {
           contenitoreCarte.previousElementSibling.textContent = "Riduci";
                   
         } else {

          
           contenitoreCarte.previousElementSibling.textContent = "Espandi";
          
          for (let i = 0; i < contenitoreCarteProva.length; i++) {
             
            contenitoreCarteProva[i].classList.remove('flip')
           }
         }
       }








