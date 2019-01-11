const colors = [
	'#061E48', '#243360', '#3D4979', '#576193', '#707AAE', '#8B93C9', '#A6AEE5', '#C2C9FF', '#DEE5FF', '#FBFFFF'
]

let colorG = new Array
for (let color of colors.keys()) {
	colorG.push({ index: color })
}


//let stateArr


window.onload = function(){
	// lo(cityList.length)
	var app = new Vue({
		el:"#app",
		data:{
			onC:false,
			cities:cityList,
			state:''
		},
		methods:{
			liClick:function (e) {


			var ajax = new XMLHttpRequest();
		  ajax.onreadystatechange = function () {
		      if (ajax.readyState == 4 && ajax.status == 200) {
		          var res = JSON.parse(ajax.responseText)
							// app.state.splice(0)
							// app.state.splice(0,0,res)
							app.state=res
		      }
		  };
		  ajax.open('post', `https://api.openweathermap.org/data/2.5/weather?id=${e.target.id}&APPID=82161b512fc36f943b2cf28bf4f7df2a`, true);
		  ajax.send();
			},
			addList: function (x) {
				for (let i = 0; i < x; i++) {

					app.cities.splice(0,0,colors[i])

				}

			}
		},
		computed:{
			stateList:function(){
				let weather = this.state.weather
				if(weather){
					let weaArr = []
					for(let [key, value] of Object.entries(weather[0])){
						weaArr.push(key,value)
					}
					return weaArr
				}


			}
		}

	})

	// app.numbList = colorG




}
