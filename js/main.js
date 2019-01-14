const colors = [
	'#061E48', '#243360', '#3D4979', '#576193', '#707AAE', '#8B93C9', '#A6AEE5', '#C2C9FF', '#DEE5FF', '#FBFFFF'
]

let colorG = new Array
for (let color of colors.keys()) {
	colorG.push({ index: color })
}

[a,b,c] = ['A','B','C']

//let stateArr


window.onload = function(){
	// lo(cityList.length)
	var app = new Vue({
		el:"#app",
		data:{
			onC:false,
			cities:cityList,
			state:'',
			nav:[a,b,c],
			isNavOpen:true
		},
		methods:{
			liClick:function (e) {


			var ajax = new XMLHttpRequest();
		  ajax.onreadystatechange = function () {
		      if (ajax.readyState == 4 && ajax.status == 200) {
				//   lo(ajax.responseText)
		          var res = JSON.parse(ajax.responseText)
							app.state=res
					
		    }
		  };
		  ajax.open('post', `https://api.openweathermap.org/data/2.5/weather?id=${e.target.id}&APPID=82161b512fc36f943b2cf28bf4f7df2a`, true);
		  ajax.send();
			},
			toggleNav: function (e) {
				this.isNavOpen =! true
				
			}
		},
		computed:{
			stateList:function(){
				let weather = this.state.weather
				let wind = this.state.wind
				let back = []
				if(weather){
					let weaArr = []
					for(let [key, value] of Object.entries(weather[0])){
						weaArr.push({key,value})
						lo(`${key}: ${value}`)
					}
					back.push({'天气:':weaArr[1].value},{'描述:':weaArr[2].value})
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
					back.push({'风速:':winArr[0].value})
				}

				if(back.length>1){
					// for(let )
					lo(Object.keys(back[2]))
					return back
				}
			}
		}

	})

	// app.numbList = colorG




}
