define(["jquery"],function($){
	class Verification{
		constructor(){}					//这是一个让弹出页面显示与隐藏的模块
		init(){
			this.$size = $("#size")
			this.$fixedsize = $(".fixed-size")
			this.$closesize = $("#close-size")
			
			this.$wrap = $(".wrap-currency")
			
			this.$btn = $(".view-buybar")
			this.$verc = $(".closethis")
			this.$ver = $(".ver")
//			console.log(this.$size,this.$btn)
			this.$size.on("click",$.proxy(this.itemsize,this))
			this.$btn.on("click",$.proxy(this.signin,this))
			this.$closesize.on("click",$.proxy(this.close,this))
			this.$verc.on("click",$.proxy(this.closev,this))
			$(".view-ActionBack").on("click",$.proxy(this.signin,this))
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
			this.$ver.css({
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
		closev(){
			this.$wrap.css({
				display:"none"
			})
			this.$ver.css({
				display:"none"
			})
		}
	}
	return new Verification()
})