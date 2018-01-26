define(["jquery"],function($){
	class Validation{
		constructor(){}
		init(){
			this.$li = $(".ver-tab li")      					//登录或者注册按钮
			this.$li.on("click",$.proxy(this.addclass,this))
			
			this.$member = $(".logoin")
			
			this.$slider = $(".niz")							//滑块
			this.$slider.on("mousedown",$.proxy(this.move,this))
			this.$bg = $(".left-bg")
			$(".wrap-currency").bind("selectstart",function(){return false;});
			$(".ver").bind("selectstart",function(){return false;});
			
		}
		addclass(event){
			let target = event.target||window.event.target
			this.$li.removeClass("current")
			$(target).addClass("current")
			
			this.$member.css({
				display:"none"
			})
			this.$member.eq($(target).index()).css({
				display:"block"
			})
		}
		move(event){
			let cLeft = event.clientX
			
			this.$target = $(event.target)
//			console.log(this.$target)
			if(this.$bg.width()>100){
//				console.log(this.$bg.width())
				return;
			}
			this.$eleleft = $(event.target).offset().left
			this.tLeft = event.offsetX							//鼠标按下时的相对位置
			this.eleL = cLeft - this.$eleleft-this.tLeft
//			console.log(this.eleL)
			$(document).on("mousemove",$.proxy(this.elemove,this))
			$(document).on("mouseup",$.proxy(this.leave,this))
		}
		elemove(event){
			let cLeft = event.clientX							//鼠标按下时的相对位置
			this.eleL = cLeft - this.$eleleft-this.tLeft
//			console.log(1)
//			console.log(this.eleL)
			
			this.eleL = this.eleL <= 0 ? 0 : this.eleL;
			this.eleL = this.eleL >= 257 ? 257 : this.eleL;
			this.$target.prev().css({
				width:this.eleL+10
			})
			this.$target.css({
				left:this.eleL
			})
		}
		leave(){
			$(document).off("mousemove")
//			this.eleL = cLeft - this.$eleleft-this.tLeft
//			console.log(1)
			if(this.eleL < 257){
//				console.log(this.eleL)
				this.$target.stop().animate({
					left:"0"
				},500)
				this.$target.prev().stop().animate({
					width:"1",
				},500)
			}else{
				this.$target.next().children().remove()
				this.$target.next().html("通过验证")
				this.$target.next().css({
					color:"#fff"
				})
//				console.log(this.eleL)
				this.$target.html("")
				this.$target.append('<b class="iconfont">'+'&#xe6ba;'+'</b>')
				$(document).off("mouseup")
			}
			
		}
	}
	return new Validation()
})