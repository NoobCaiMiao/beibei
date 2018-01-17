define(["jquery"],function($){
	class Brand{
		constructor(){}
		init(){
			this.$brandTop = $(".brand-top a")
			this.$brandTop.on("mouseover",$.proxy(this.Btop,this))
			this.$brandCenter = $(".brand-center")
//			console.log(this.$brandCenter)
		}
		Btop(e){
			let target = e.target
//			console.log(this.$brandTop)
			this.$brandTop.each(function(index){
//				console.log($(this))
				$(this).css({
					borderBottom: "2px solid transparent"
				})
			})
			this.$brandCenter.each(function(){
				$(this).css({
					zIndex: "0"
				})
			})
//			console.log()
			this.$brandCenter.eq($(target).parent().index()).css({
				zIndex: "1"
			})
			$(target).css({
				borderBottom: "2px solid #ff647c"
			})
		}
	}
	return new Brand()
})