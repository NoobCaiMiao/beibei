define(["jquery"],function($){
	class yuerbaoscroll{
		constructor(){}
		init(){
			this.moving = false
			this.$bod = $("body")
			this.$body = document.getElementsByTagName("body")[0]
			this.$bod.on('mousewheel', $.proxy(this.scroll,this))
			this.$nav = $(".fixed-nav")
			this.$sidebtn = $(".side-panel span")
			this.$sidebtn.on("click",$.proxy(this.jump,this))
			this.dis()
			this.$sidebtn.on("mouseover",$.proxy(this.big,this))
			this.$sidebtn.on("mouseout",$.proxy(this.small,this))
			
		}
		small(e){
			let target = e.target
			let index = $(target).parent().index()
			this.$sidebtn.eq(index).css({
				width:"6px",
				height:"6px",
				marginLeft:"-3px",
				marginTop:"-3px"
			})
			this.dis()
		}
		big(e){
			let target = e.target
			let index = $(target).parent().index()
			this.$sidebtn.eq(index).css({
				width:"10px",
				height:"10px",
				marginLeft:"-5px",
				marginTop:"-5px"
			})
		}
		dis(){
//			console.log(1)
			let cHeight = this.$bod.height()
			var iNow = parseInt(getComputedStyle(this.$body,null).marginTop) 
			let num =Math.abs(Math.round(iNow/cHeight) )
//			console.log(this.$sidebtn.parent().eq(num))
			this.$sidebtn.css({
				width:"6px",
				height:"6px",
				marginLeft:"-3px",
				marginTop:"-3px"
			})
			this.$sidebtn.parent().eq(num).children().css({
				width:"12px",
				height:"12px",
				marginLeft:"-6px",
				marginTop:"-6px"
			})
		}
		jump(e){
			let target = e.target
			let index = $(target).parent().index()
			let cHeight = this.$bod.height()
			var iNow = parseInt(getComputedStyle(this.$body,null).marginTop)
			let num =Math.abs(Math.round(iNow/cHeight) )
			
			
			let _this = this
			if(index == num||this.moving==true){
				return
			}
			this.moving = true
			this.$bod.animate({
				marginTop:iNow + cHeight*(num-index) + "px" 					//上滑margintop大小增加一个屏幕宽度
			},1000,function(){
				var iNow = parseInt(getComputedStyle(_this.$body,null).marginTop)
				if(iNow==0){
					_this.$nav.css({
						display:"none"
					})
					_this.$nav.slideDown(500)
				}else if(num==0) {
					_this.$nav.css({
						display:"block"
					})
					_this.$nav.slideUp(500)
				}
				_this.dis()
				_this.moving = false
			})
			
		}
		scroll(event){
			var iNow = parseInt(getComputedStyle(this.$body,null).marginTop)//获取当前body-margintop大小
			let cHeight = this.$bod.height()								//获取屏幕宽度
			let evt = event||window.event
			let target = evt.originalEvent.deltaY
			let _this = this
			
			if(iNow < -cHeight){
				this.$nav.css({
					display:"none"
				})
			}
			if(evt.originalEvent){
				
				if(target < 0&&iNow!=0){
					if(this.moving == true){
						return 0 ;
					}
					this.moving = true
					this.$bod.animate({
						marginTop:iNow + cHeight + "px" 					//上滑margintop大小增加一个屏幕宽度
					},500,function(){
						var iNow = parseInt(getComputedStyle(_this.$body,null).marginTop)
						if(iNow==0){
							_this.$nav.css({
								display:"none"
							})
							_this.$nav.slideDown(500)
						}
						_this.dis()
						_this.moving = false
					})
					
				}else if(target>0&&iNow>-cHeight*5){
					if(this.moving == true){
						return 0 ;
					}
					this.moving = true
					this.$bod.animate({
						marginTop:iNow - cHeight + "px" 					//上滑margintop大小增加一个屏幕宽度
					},500,function(){
						var iNow = parseInt(getComputedStyle(_this.$body,null).marginTop)
						if(iNow==-cHeight){
							_this.$nav.css({
								display:"block"
							})
							_this.$nav.slideUp(500)
						}
						_this.dis()
						_this.moving = false
					})
				}
			}else if(evt.detail){
				if(-evt.detail>0){
					console.log(3)
				}else{
					console.log(4)
				}
			}
			
		}
		
		
	}
	return new yuerbaoscroll()
})
