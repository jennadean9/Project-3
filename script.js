const body = document.querySelector("body");
const rooturl = "https://swapi.co/api/planets";
const alderaan = document.querySelector("#alderaan");
const coruscant = document.querySelector("#coruscant");
const hoth = document.querySelector("#hoth");
const bespin = document.querySelector("#bespin");
const kamino = document.querySelector("#kamino");
const description = document.querySelector("p");
const bgalderaan = "url('alderaan.jpg') no-repeat center center fixed";
const bgcoruscant = "url('coruscant.jpg')";
const bghoth = "url('hoth.jpg') no-repeat center center fixed";
const bgbespin = "url('bespin.jpg') no-repeat center center fixed";
const bgkamino = "url('kamino.jpg') no-repeat center center fixed";

alderaan.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[0].name)
			console.log(res.results)
			description.innerText = res.results[0].name;
			body.style.background = bgalderaan;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
coruscant.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[7].name)
			description.innerText = res.results[7].name;
			body.style.background = bgcoruscant;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
hoth.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[2].name)
			description.innerText = res.results[2].name;
			body.style.background = bghoth;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
bespin.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[4].name)
			description.innerText = `This is ${res.results[4].name}`;
			body.style.background = bgbespin;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
kamino.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[8].name)
			description.innerText = `This is ${res.results[8].name}`;
			body.style.background = bgkamino;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
/*
name: planet name
diameter: in km
orbital_period: number of days it takes to complete an orbit around its star
gravity: in standard G
population: population of sentinent beings
terrain: description
surface_water: percentage of the planet surgace that is naturally occurring water or bodies of water
*/
