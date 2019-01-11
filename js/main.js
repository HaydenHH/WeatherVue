const colors = [
	'#061E48', '#243360', '#3D4979', '#576193', '#707AAE', '#8B93C9', '#A6AEE5', '#C2C9FF', '#DEE5FF', '#FBFFFF'
]

let colorG = new Array
for (let color of colors.keys()) {
	colorG.push({ index: color })
}

let lo = (x)=>{
	 console.log(x)
}



window.onload = function(){

	var app = new Vue({
		el:"#app",
		data:{
			onC:false,
			numbList:[]
		},
		methods:{
			liClick:function (e) {
				lo(e.target)
				app.e.target.onC = true
			},
			addList: function (x) {
				for (let i = 0; i < x; i++) {
					app.numbList.splice(10)
					app.numbList.splice(i, 1, colorG[i])
					
				}
			}
		}
		
	})
	
	// app.numbList = colorG

	
	

}