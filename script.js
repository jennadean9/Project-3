const tabs = document.querySelector(".tabs");
const rooturl = "https://swapi.co/api/planets";
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const alderaan = document.querySelector("#alderaan");
const corsucant = document.querySelector("#corsucant");
const hoth = document.querySelector("#hoth");
const bespin = document.querySelector("#bespin");
const kamino = document.querySelector("#kamino");
const description = document.querySelector("p");

alderaan.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[0].name)
			description.innerText = res.results[0].name;
		})
		.catch(err=>{
			console.log("try again!")
		})
})
corsucant.addEventListener("click", function (e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[7].name)
			description.innerText = res.results[7].name;
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
			description.innerText = res.results[4].name;
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
			description.innerText = res.results[8].name;
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

// function getInfo(e){
// 	e.preventDefault();
// 	fetch(rooturl)
// 		.then(res => res.json())
// 		.then(res => {
// 			// console.log(res.results[0]);
// 			// console.log(res.results[7]);
// 			// console.log(res.results[2]);
// 			// console.log(res.results[4]);
// 			// console.log(res.results[8]);
// 			// console.log(res.results[8].name);
// 			if (e.target.id = "Alderaan"){
// 				console.log(res.result[0]);
// 			}
// 			if (e.target.id = "Corsucant"){
// 				console.log(res.results[7]);
// 			}
// 			if (e.target.id = "Hoth"){
// 				console.log(res.result[2]);
// 			}
// 			if (e.target.id = "Bespin"){
// 				console.log(res.results[4])
// 			}
// 			if (e.target.id = "Kamino"){
// 				console.log(res.results[8])
// 			}
// 		// 	for (i = 0; i < planets.length; i++){
// 		// 		console.log(res.result[i].name);
// 		// 		planets[i].addEventListener("click", getInfo)
// 		// }
// 		})
// 		.catch(err =>{
// 			console.log("try again..")
// 		});
// 		// .finally(res =>{
// 		// 	console.log(res.result[i].name)
// 		// })
// }


// for(i = 0; i < planets.length; i++){
// 	planets[i].addEventListener("click", getInfo)
// 	console.log(planets[i].name);
// }

