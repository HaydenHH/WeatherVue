const colors = [
	'#061E48', '#243360', '#3D4979', '#576193', '#707AAE', '#8B93C9', '#A6AEE5', '#C2C9FF', '#DEE5FF', '#FBFFFF'
]

let back = []


let colorG = new Array
for (let color of colors.keys()) {
	colorG.push({ index: color })
}

[a,b,c] = ['A','B','C']
let grid = new Array()

for(let i=0;i<300;i++){
	grid.push({'id':i,'holder':''})
}





window.onload = function(){


	var app = new Vue({
		el:"#app",
		data:{
			onC:false,
			cities:cityList,
			state:'',
			nav:[a,b,c],
			isNavOpen:true,
			grid:grid,
			rain:'rain',
			back:back
		},
		methods:{
			liClick:function (e) {


				var ajax = new XMLHttpRequest();
		  	ajax.onreadystatechange = function () {
		      if (ajax.readyState == 4 && ajax.status == 200) {
				//   lo(ajax.responseText)
		          var res = JSON.parse(ajax.responseText)
							app.state=res

								if(app.state){
									back.splice(0)
									let weather = app.state.weather
									let wind = app.state.wind

									if(weather){
										let weaArr = []
										for(let [key, value] of Object.entries(weather[0])){
											weaArr.push({key,value})
											lo(`${key}: ${value}`)
										}
										back.push({'weather':weaArr[1].value},{'desc':weaArr[2].value})
									}

									if(wind){
										let winArr = []
										for (let [key, value] of Object.entries(wind)) {
											winArr.push({
												key,
												value
											})
											lo(`${key}: ${value}`)
										}
										back.push({'speed':winArr[0].value})
									}

									if(back.length>1){
										// for(let )
										lo(Object.keys(back[2]))
										return `${back[0].weather},${back[1].desc},${back[2].speed}`
									}
								}


		    	}
		  	};
		  	ajax.open('post', `https://api.openweathermap.org/data/2.5/weather?id=${e.target.id}&APPID=82161b512fc36f943b2cf28bf4f7df2a`, true);
		  	ajax.send();

			},

		},
		computed:{
			// stateList:function(){
			// 	let weather = this.state.weather
			// 	let wind = this.state.wind
			// 	let back = []
			// 	if(weather){
			// 		let weaArr = []
			// 		for(let [key, value] of Object.entries(weather[0])){
			// 			weaArr.push({key,value})
			// 			lo(`${key}: ${value}`)
			// 		}
			// 		back.push({'weather':weaArr[1].value},{'desc':weaArr[2].value})
			// 	}
			//
			// 	if(wind){
			// 		let winArr = []
			// 		for (let [key, value] of Object.entries(wind)) {
			// 			winArr.push({
			// 				key,
			// 				value
			// 			})
			// 			lo(`${key}: ${value}`)
			// 		}
			// 		back.push({'speed':winArr[0].value})
			// 	}
			//
			// 	if(back.length>1){
			// 		// for(let )
			// 		lo(Object.keys(back[2]))
			// 		return `${back[0].weather},${back[1].desc},${back[2].speed}`
			// 	}
			// }
		}

	})

	// app.numbList = colorG

	anime({
	targets: '.box-in-grid',
	scale: [
		{value: .1, easing: 'easeOutSine', duration: 1500},
		// {value: 1, easing: 'easeInOutQuad', duration: 1200}
	],
	rotateY:[
			{value:'1turn',easing:'linear',duration:anime.stagger(1500, {grid: [16, 5], from: 'center'})}
	],
	delay: anime.stagger(200, {grid: [16, 5], from: 'center'})
	});


}
