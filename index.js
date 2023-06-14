
/* npm init 
npm init @eslint/config  */


/* let number = 5;
number = 10;
console.log(number); */


//ALLERT, CONFIRM, PROMPT  -  rabotajut tolko v brauzere
/* let answer = confirm('do you have 18');            //sprashivaem u polzovatelia i poluchaem otvet TRUE ili FALSE
console.log(answer); */
/* let answer = prompt('do you have 18');                //sprashivaem u polzovatelia i poluchaem otvet STRING
console.log(answer); */
//comanda TYPEOF() - vyvodit tip dannych , napimer, peremennoj


// Kankatenacia strok delaetsa s pomoshchju INTERPOLIACII:
/* const category = 'toys'; */
/* console.log(`https://someurl.com/${category}`);   // - takoy priem nazyvaetsa INTERPOLIACIA (ispolzujutsa kavychki `` i znak $)*/
//mozno delat i po drugomu:
/* console.log('https://someurl.com/' + category); */


//5 % 2 - pokazet ostatok ot delenija (1)
// && - operator i
// || - operator ili
//a++ - uvelichenie na 1, a-- - umenshenie na 1  (postfiksnaja forma)
//++a , --a -                                    (prefiksnaja forma)
// 2 * 4 == 8 - True, 2 * 4 == '8' - True;  2 * 4 === 8 - True, 2 * 4 === '8' - False
// ! - operator otricanija    (primer: esli postawit pered True to budet False; != - eto NIE RAWNO)
//!= - obratnoe k ==;   !== - obratnoe k ===


//GIT HUB
//git init - sozdaem repozitorij
//git config --local user.name"Taras Steba" - zadaem lokalno imia usera, kto vnosit izmenenija
//git config --local user.email stebataras@gmail.com - zadaem lokalno e-mail usera, kto vnosit izmenenija
// v proekte w papke GIT v faile CONFIG - pojavitsa name i email  tot chto my wpisali

//git add -A - dobawliaem faily
//git commit -a -m"" - delaem COMMIT
//git log - posmotret vse Kommity
//sozdaem rukami repozitorij na GITHUB, kopiruem ot tuda komandu git remote add origin .....(eto nazwanie nashego repozitoria)
//i teper my mozem PUSH nashy COMMIT w Internet
//propisuem git push -u origin master - origin(nazwanie), master(wetka) 
//proshlaja komanda pishetsa tolko 1 raz, potom pishem prosto GIT PUSH

//kurs po GIT HUB mozno pochitat na saite:      githowto.com/ru


//Punkt 2 lesson 19
const numberOfFilms = +prompt('How much films you are watched', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const a = prompt('Last watched film', ''),
	b = +prompt('your grade', ''),
	c = prompt('Last watched film', ''),
	d = +prompt('your grade', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




