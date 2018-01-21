define(["jquery"],function($){
	class Verification{
		constructor(){}
		init(){
			this.$size = $("#size")
			this.$btn = $(".view-buybar")
			this.$wrap = $(".wrap-currency")
			this.$fixedsize = $(".fixed-size")
			this.$closesize = $("#close-size")
//			console.log(this.$size,this.$btn)
			this.$size.on("click",$.proxy(this.itemsize,this))
			this.$btn.on("click",$.proxy(this.signin,this))
			this.$closesize.on("click",$.proxy(this.close,this))
		}
		itemsize(){
			this.$wrap.css({
				display:"block"
			})
			this.$fixedsize.css({
				display:"block"
			})
		}
		signin(){
			this.$wrap.css({
				display:"block"
			})
		}
		close(){
			this.$wrap.css({
				display:"none"
			})
			this.$fixedsize.css({
				display:"none"
			})
		}
	}
	return new Verification()
})