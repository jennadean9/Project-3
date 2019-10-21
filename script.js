const body = document.querySelector("body");
const rooturl = "https://swapi.co/api/planets";
const alderaan = document.querySelector(".alderaan");
const coruscant = document.querySelector(".coruscant");
const hoth = document.querySelector(".hoth");
const bespin = document.querySelector(".bespin");
const kamino = document.querySelector(".kamino");
const description = document.querySelector("p");

alderaan.addEventListener("click", function (e){
	e.preventDefault();
	body.classList.add("ald");
	body.classList.remove("h", "cor", "bes", "kam")
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[0])
			description.innerText = `Welcome to ${res.results[0].name}! 
			${res.results[0].name} is ${res.results[0].diameter} kilometers in diameter, and has ${res.results[0].orbital_period} days in a year.
			The planet ${res.results[0].name} is ${res.results[0].surface_water}% water, and the ${res.results[0].terrain} terrain populate ${res.results[0].population} beings.
			Thanks for visiting!`;;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
coruscant.addEventListener("click", function (e){
	e.preventDefault();
	body.classList.add("cor");
	body.classList.remove("h", "ald", "bes", "kam")
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[7])
			description.innerText = `Welcome to ${res.results[7].name}! 
			${res.results[7].name} is ${res.results[7].diameter} kilometers in diameter, and has ${res.results[7].orbital_period} days in a year.
			The planet ${res.results[7].name} is ${res.results[7].surface_water}% water, and the ${res.results[7].terrain} of the planet populate ${res.results[7].population} beings.
			Thanks for visiting!`;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
hoth.addEventListener("click", function (e){
	e.preventDefault();
	body.classList.add("h");
	body.classList.remove("ald", "cor", "bes", "kam")
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[2])
			description.innerText = `Welcome to ${res.results[2].name}! 
			${res.results[2].name} is ${res.results[2].diameter} kilometers in diameter, and has ${res.results[2].orbital_period} days in a year.
			The planet ${res.results[2].name} is ${res.results[2].surface_water}% water, and the ${res.results[2].terrain} terrain populate ${res.results[2].population} beings.
			Thanks for visiting!`;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
bespin.addEventListener("click", function (e){
	e.preventDefault();
	body.classList.add("bes");
	body.classList.remove("h", "cor", "ald", "kam")
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[4])
			description.innerText = `Welcome to ${res.results[4].name}! 
			${res.results[4].name} is ${res.results[4].diameter} kilometers in diameter, and has ${res.results[4].orbital_period} days in a year.
			The planet ${res.results[4].name} is ${res.results[4].surface_water}% water, and the ${res.results[4].terrain} terrain populates ${res.results[4].population} beings.
			Thanks for visiting!`;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
kamino.addEventListener("click", function (e){
	e.preventDefault();
	body.classList.add("kam");
	body.classList.remove("h", "cor", "bes", "ald")
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[8])
			description.innerText = `Welcome to ${res.results[8].name}! 
			${res.results[8].name} is ${res.results[8].diameter} kilometers in diameter, and has ${res.results[8].orbital_period} days in a year.
			The planet ${res.results[8].name} is ${res.results[8].surface_water}% water, and the ${res.results[8].terrain} terrain populates ${res.results[8].population} beings.
			Thanks for visiting!`;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
