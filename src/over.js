define(["jquery"],function($){
	class Over{
		constructor(){
//			this.init()
		}
		init(){
//			console.log(1)
//			return 1
			this.smalla = $(".small a")
			this.$small = $(".small")
//			console.log(this.$small.height())
//			console.log(this.)
			this.smalla.on("mouseenter",$.proxy(this.view,this))
			this.$smallspan = $(".small span")
			this.$small.on("mouseleave",$.proxy(this.viewnone,this))
		}
		view(event){
			event.stopPropagation();
//			console.log(this.$smallspan)
//			console.log(this.$small.height())
			this.$small.css({
				width: "85px",
				height:"45px",
		        lineHeight: "20px",
		        marginLeft: "9px",
		        marginTop: "3px",
		        border: "1px solid #999",
		        textAlign: "center",
		        marginRight: "0",
		        background: "#ffffff",
//		        position:"absolute",
//		        zIndex:"999"
			})
			this.$smallspan.css({
				display: "block",
		        lineHeight: "20px",
		        paddingRight: "12px", 
			})
//			console.log(1)
		}
		viewnone(event){
			event.stopPropagation();
//			console.log(1)
			this.$small.css({
				marginLeft: "16.5px",
     			marginRight: "7.5px",	
     			width: "auto	",
		        lineHeight: "22px",
		        border: 0,
		        textAlign: "center",
		        background: "none"
			})
				this.$smallspan.css({
				display: "none",
			})
//			console.log(2)
		}
	}
	
	return new Over();
})