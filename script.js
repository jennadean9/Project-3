const tabs = document.querySelector(".tabs");
const planets = document.getElementsByClassName("planets");
const rooturl = "https://swapi.co/api/planets";
const h1 = document.querySelector("h1")

function getInfo(e){
	e.preventDefault();
	fetch(rooturl)
		.then(res => res.json())
		.then(res => {
			console.log(res.results[0]);
			console.log(res.results[7]);
			console.log(res.results[2]);
			console.log(res.results[4]);
			console.log(res.results[8]);
			console.log(res.results[8].name);
			if (e.target.input = "Alderaan"){
				console.log(res.result[0]);
			}
			if (e.target.input = "Corsucant"){
				console.log(res.results[7]);
			}
			if (e.target.input = "Hoth"){
				console.log(res.result[2]);
			}
			if (e.target.input = "Bespin"){
				console.log(res.results[4])
			}
			if (e.target.input = "Kamino"){
				console.log(res.results[8])
			}
			for (i = 0; i < planets.length; i++){
				console.log(res.result[i].name);
				planets[i].addEventListener("click", getInfo)
		}
		})
		.catch(err =>{
			console.log("try again..")
		});
		// .finally(res =>{
		// 	console.log(res.result[i].name)
		// })
		
}

for(i = 0; i < planets.length; i++){
	planets[i].addEventListener("click", getInfo)
	console.log(planets[i].name);
}

/*
name: planet name
diameter: in km
orbital_period: number of days it takes to complete an orbit around its star
gravity: in standard G
population: population of sentinent beings
terrain: description
surface_water: percentage of the planet surgace that is naturally occurring water or bodies of water
*/