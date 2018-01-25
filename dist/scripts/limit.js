define(["jquery"],function($){
	class countDown{
		constructor(){
			
		}
		init(){
			this.$pic = $(".time-pic")
			this.$clock = $(".clock")
			this.$hours = $(".hours")
			this.$minutes = $(".minutes")
			this.$seconds = $(".seconds")
			this.$waite1 = $(".waite1")
			this.$waite2 = $(".waite2")
			this.countdown()
			
			this.$six = 6*60*60
		}
		countdown(){
			let time = new Date()
			let h = time.getHours()
			let m = time.getMinutes()
			let s = time.getSeconds()
//			console.log(h)
			if(h>=15 && h<21){
//				console.log(2)
				this.$pic.css({
					backgroundPosition:"-88px -144px"
				})
				this.$waite1.html("21:00")
				this.$waite2.html("09:00")
				this.$clock.html("15:00")
			}else if(h>=21||h<9){
				this.$pic.css({
					backgroundPosition:"-164px -144px"
				})
				this.$waite1.html("09:00")
				this.$waite2.html("15:00")
				this.$clock.html("21:00")
			}else{
				this.$pic.css({
					backgroundPosition:"-8px -144px"
				})
				this.$waite1.html("15:00")
				this.$waite2.html("21:00")
				this.$clock.html("09:00")
			}
			var _this = this
			setInterval(function(){
				let time = new Date()
				_this.h = time.getHours()
				_this.m = time.getMinutes()
				_this.s = time.getSeconds()
//				console.log(h,m,s)
//				console.log(time.getTime())
//				console.log(time.setTime(9))
//				console.log(_this.s.toString().length)
//				if(_this.s.toString().length <= 1){
//					_this.s = '0' + _this.s
//					console.log(_this.s)
//				}
//				if(_this.m.toString().length <= 1){
//					_this.m = '0' + _this.s
//					console.log(_this.s)
//				}
//				if(_this.h.toString().length <= 1){
//					_this.h = '0' + _this.s
//					console.log(_this.s)
//				}
				_this.countdowns()
			},1000)
		}
		countdowns(){
//			console.log(1)
//			console.log(this.h)
			if(this.h>=15 && this.h<21){
				let total = (this.h - 15)*3600+this.m*60+this.s
				let surplus = this.$six - total
				this.h =parseInt(surplus/3600)
				this.m = parseInt((surplus - this.h*3600)/60) 
				this.s = surplus % 60
//				console.log(this.h,this.m,this.s)
//				console.log(this.s.toString().length)
				if(this.s.toString().length <= 1){
					this.s = '0' + this.s
				}
				if(this.m.toString().length <= 1){
					this.m = '0' + this.m
				}
				if(this.h.toString().length <= 1){
					this.h = '0' + this.h
				}
				this.$hours.html(this.h)
				this.$minutes.html(this.m)
				this.$seconds.html(this.s)
			}else if(this.h>=21||this.h<9){
				if(this.h>=21){
					var num = this.h - 21
				}else{
					var num = 9 - this.h
				}
//				console.log(num)
				let total = num*3600+this.m*60+this.s
//				console.log(total,this.$six)
				let surplus = this.$six*2 - total
				this.h =parseInt(surplus/3600)
				this.m = parseInt((surplus - this.h*3600)/60) 
				this.s = surplus%60
				if(this.s.toString().length <= 1){
					this.s = '0' + this.s
				}
				if(this.m.toString().length <= 1){
					this.m = '0' + this.m
				}
				if(this.h.toString().length <= 1){
					this.h = '0' + this.h
				}
				this.$hours.html(this.h)
				this.$minutes.html(this.m)
				this.$seconds.html(this.s)
			}else{
				let total = (this.h - 9)*3600+this.m*60+this.s
				let surplus = this.$six - total
				this.h =parseInt(surplus/3600)
				this.m = parseInt((surplus - this.h*3600)/60) 
				this.s = surplus%60
				if(this.s.toString().length <= 1){
					this.s = '0' + this.s
				}
				if(this.m.toString().length <= 1){
					this.m = '0' + this.m
				}
				if(this.h.toString().length <= 1){
					this.h = '0' + this.h
				}
				this.$hours.html(this.h)
				this.$minutes.html(this.m)
				this.$seconds.html(this.s)
			}
		}
		
	}
	return new countDown()
})