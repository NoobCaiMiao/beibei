define(["jquery"],function($){
	class Overnav{
		constructor(){
			
		}
		init(){
			this.$li = $(".follow")
			this.$span = $(".follow span")
//			console.log($span)
			this.$div = $(".follow div")
			this.$li.on("mouseover",$.proxy(this.block,this))
			this.$li.on("mouseout",$.proxy(this.dispear,this))
		}
		block(){
			this.$div.css({
				display:"block"
			})
			this.$span.css({
				border: "1px solid #999",
                borderBottom: 0,
                background: "#FFFFFF"
			})
		}
		dispear(){
			this.$div.css({
				display:"none"
			})
			this.$span.css({
				border: "1px solid #999",
                borderBottom: 0,
                background: "transparent",
                border: "1px solid transparent"
			})
		}
	}
	
	return new Overnav()
})