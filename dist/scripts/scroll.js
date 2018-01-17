define(["jquery"],function($){
	class scroll{
		constructor(){
			
		}
		init(){
			this.$fixed = $("#fixed-sub-nav")
			$(window).on("scroll",$.proxy(this.show,this))
		}
		show(){
//			console.log(2)
			let scrollTop = document.documentElement.scrollTop||document.body.scrollTop
//			console.log(scrollTop)
			if(scrollTop>160){
//				console.log(2)
				this.$fixed.css({
					display:"block"
				})
			}else{
				this.$fixed.css({
					display:"none"
				})
			}
			
		}
	}
	return new scroll()
})