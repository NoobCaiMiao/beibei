define(["jquery"],function($){
	class Pull{
		constructor(){}
		init(){
			
			this.$more = $(".more")
			this.load()
			$(window).on("scroll",$.proxy(this.scroll,this))
			this.timer = null
			this.clientH = document.documentElement.clientHeight
			this.flag = 0
			this.$more.on("click",$.proxy(this.load,this))
		}
		scroll(){
			if(this.flag == 2){
				return ;
			}
			this.box = $(".container-box")
			clearTimeout(this.timer)//清除计时器
			var _this = this
			this.timer = setTimeout(function(){
				var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
//				console.log(_this.box.length)
//				console.log(_this.box.eq(_this.box.length - 1).offset().top)
				let height = _this.box.eq(_this.box.length - 1).offset().top
				if(scrolltop + _this.clientH > height){
					_this.load()
				}
//				console.log(scrolltop)
				$(window).scrollTop(scrolltop)
				_this.flag++
//				return;
			},1000)
		}
		load(){
			$.get("json/pull.json").then($.proxy(this.reding,this))
		}
		reding(res){
//			console.log(res)
			let _this = this
			$(res).each(function(index,item){
//				console.log(index,item)
				let box = $('<div class="container-box">'+
					'<a href="list.html">'+
						'<div class="container-brand-info">'+
							'<img src='+item.brandlogo+'>'+
							'<div class="brand-name">'+
								item.brandname+
							'</div>'+
							'<span class="brand-info">'+
								item.brandnames+
							'</span>'+
							'<div class="discount">'+
								item.mjtext+ '<i class="iconfont">&#xe658;</i>&nbsp;'+
							'</div>'+
						'</div>'+
						'<div class="item-show clear">'+
						'</div>'+
					'</a>'+
				'</div>')
				_this.$more.before(box)
				_this.appenditems(item.item,index)
			})
		}
		appenditems(res,index){
//			console.log(res)
//			console.log(index)
			let _this = this
			this.$itemshow = $(".container-box .item-show")
//			console.log(this.$itemshow)
			$(res).each(function(index,item){
//				_this.b = $("<div></div>")
				let box = $('<div class="item-detail">'+
								'<dl>'+
									'<dt><img src='+item.lazy+'></dt>'+
									'<dd class="price-info"><span>¥</span><span class="now-price">'+item.pricenum+'</span><span>'+item.pricelittle+'</span><span class="old-price">'+item.oldprice+'</span></dd>'+
									'<dd class="item-info">'+item.title+'</dd>'+
								'</dl>'+
							'</div>')
//				console.log(_this.)
				_this.$itemshow.eq(_this.$itemshow.length-1).append(box)
			})
//			console.log(this.b)
//			return this.b
		}
	}
	return new Pull()
})