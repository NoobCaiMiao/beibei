define(["jquery"],function($){
	class Scroll{
		constructor(){}
		init(){
			this.$bar = $(".nav-bar")
			this.$body = $(window)
			this.$dup = $(".duplication")
			this.$barBtn = $(".nav-bar li")
			this.$div = $(".main-content").children()
//			console.log(this.$barBtn)
			this.$body.on('mousewheel', $.proxy(this.scroll,this))
			
			this.$barBtn.on("click",$.proxy(this.jump,this))
			
			
		}
		scroll(event){
			var evt = event||window.event
			this.scrollTop = document.documentElement.scrollTop||document.body.scrollTop
			let eleTop = this.$bar.offset().top
//			console.log(eleTop)
//			console.log(evt,evt.originalEvent.wheelDelta,evt.detail)
			var speed = 0   //  根据滚轮方向设置速度
			if(evt.originalEvent.wheelDelta){
				if(evt.originalEvent.wheelDelta>0){
					speed = -5
				}else{
					speed = +5
				}
			}else if(evt.detail){
				if(-evt.detail>0){
					speed = 5
				}else{
					speed = -5
				}
			}
			let a = this.scrollTop +speed
//			console.log(a)
			if(a > 1167){
				this.$bar.attr("id","barevent")
				this.$dup.css({
					display:"block"
				})
				
			}else if(this.scrollTop <= 1167){
//				console.log(scrollTop,eleTop)
				this.$bar.removeAttr("id")
				this.$dup.css({
					display:"none"
				})
			}
		}
		jump(event){
			let target = event.target ||window.event.target
			let index = $(target).index()
//			console.log(index)
			let gotop = this.$div.eq(index).offset().top-50
			this.$barBtn.css({
				color: "#777777",
				background: "#f8f8f8"
			})
			this.$barBtn.eq(index).css({
				color: "#ff5482",
				background:"#fff"
			})
//			console.log(gotop)
			if(index == 0){
				this.$bar.removeAttr("id")
				this.$dup.css({
					display:"none"
				})
				this.$body.scrollTop(gotop);
			}else{
				this.$bar.attr("id","barevent")
				this.$dup.css({
					display:"block"
				})
				this.$body.scrollTop(gotop);
			}
			
		}
	}
	return new Scroll()
})