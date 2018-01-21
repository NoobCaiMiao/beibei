define(["jquery"],function($){
	class Magn{
		constructor(){
			
		}
		init(){
			this.$small = $(".smallbox")
			this.$big = $(".bigbox")
			this.$img = $(".bigbox img")
			this.$region = $(".magnwrap")
//			console.log(this.$small,this.$big,this.$region)//元素选择没错
			this.$region.on("mouseover",$.proxy(this.play,this))
			this.$region.on("mouseout",$.proxy(this.disapear,this))
//			console.log(this.$big)
		}
		play(){
//			console.log(1)
			this.$small.css({
				display:"block"
			})
			this.$big.css({
				display:"block"
			})
			this.$region.on("mousemove",$.proxy(this.move,this))
		}
		move(event){
			let evt = event||window.event
//			console.log(3)
			this.$X = evt.offsetX
			this.$Y = evt.offsetY
//			console.log(this.$X,this.$Y)
			
			this.$X = this.$X <= 80 ? 80 : this.$X			//边界检测
			this.$Y = this.$Y <= 80 ? 80 : this.$Y
			
			this.$X = this.$X >= 240 ? 240 : this.$X
			this.$Y = this.$Y >= 240 ? 240 : this.$Y
			
			this.$small.css({
				left:this.$X-45,
				top:this.$Y-45
			})
			
			this.follow()
			
		}
		follow(){
			
//			console.log(3)
			this.$img.css({
				top:-this.$Y*2.5+200,
				left:-this.$X*2.5+200
			})
		}
		disapear(){
//			console.log(2)
			this.$small.css({
				display:"none"
			})
			this.$big.css({
				display:"none"
			})
		}
	}
	return new Magn()
})