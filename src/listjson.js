define(["jquery"],function($){
	class Data{
		constructor(){}
		init(){
			$.get("json/list.json").then($.proxy(this.reding,this))
			this.$container = $(".item-list")
			this.countdown()
			this.$timers = $(".brand-countdown em")
		}
		reding(res){  
			let _this = this
			$(res).each(function(index,item){
//				console.log(index,item)
				let $li = $('<li>'+
					'<a href="">'+
						'<div class="img-wraper">'+
							'<img src='+item.lazy+'>'+
						'</div>'+
						'<div class="info-wraper">'+
							'<div class="title">'+
								item.title+
							'</div>'+
							'<span class="price-info">'+
								'<span class="discount">'+item.discount+'</span>'+
								'<span class="sympol">¥</span>'+
								'<span class="price">'+item.pricenum+'</span>'+
								'<span class="price-decimal">'+item.pricelittle+'</span>'+
								'<span class="origin-price strike"><i ></i>'+item.oldprice+'</span>'+
							'</span>'+
						'</div>'+
					'</a>'+
				'</li>')
				_this.$container.append($li)
			})
		}
		countdown(){
			let _this = this
			setInterval(function(){
				let datenow = new Date()
				let datewill = new Date(2018,0,27)
				let seconds = datewill.getTime() - datenow.getTime()
//				console.log(datenow,datewill)
				_this.d = parseInt(seconds/(24*3600*1000)) 
				_this.h = parseInt(seconds/3600000)%24
				_this.m = parseInt(seconds/(60*1000))%60
				_this.s = parseInt(seconds/1000)%60
//				console.log(_this.m,_this.s)
				
				_this.$timers.eq(0).html(_this.d)
				_this.$timers.eq(1).html(_this.h)
				_this.$timers.eq(2).html(_this.m)
				_this.$timers.eq(3).html(_this.s)
			},1000)
		}
	}
	return new Data()
})