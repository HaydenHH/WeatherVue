const sizeRange = []

let setSize = (x,r)=>{
	for(let i=0;i<x;i++){
		sizeRange.push(r)
	}
}
setSize(1,800)
setSize(5,500)
setSize(10,100)
setSize(50,10)
setSize(100,5)
setSize(500,2)
setSize(1000,1)


window.onload=()=>{
	const w = window.innerWidth
	const h = window.innerHeight

	function pt(){
		 let x = w/2 + [Math.random()*1-Math.random()*1] * w/2
		 let y = h/2 + [Math.random()*1-Math.random()*1] * h/2
		 let point = {x,y}
		 return point
	}

	function ifNotContact(p1,r1){
		let existPt = new Array()
		var isCon = false
		Array.from(s1.selectAll('.cir')).forEach((c)=>{
			let x = c.node.getAttribute('cx')
			let y = c.node.getAttribute('cy')
			let r = c.node.getAttribute('r')
			let p2 = {x,y,r}
			existPt.push(p2)
		})

		for(let pt of existPt.values()){

			let d = Math.sqrt((pt.x-p1.x)*(pt.x-p1.x) + (pt.y-p1.y)*(pt.y-p1.y))

			if(parseInt(r1)+parseInt(pt.r) > d){
				isCon = true
			}
		}

		if(isCon){
			return false
		}

	}

	let s1 = Snap('#svg1').attr({
		width:w,
		height:h
	})

	const q = 300


	do{
		let r1 = sizeRange[rNF(sizeRange.length)]
		let p1 = pt()

		if(ifNotContact(p1,r1) === false){

		}else{
			s1.paper.circle(p1.x,p1.y,r1).attr({
						class:'cir'
			})
		}

	}while(
		s1.selectAll('.cir').length < q
	)



}
