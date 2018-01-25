define(["jquery","cookie"],function($){
	class Goods{
		constructor(){}
		init(){
			this.$btn = $(".view-buybars")
			this.$btn.on("click",$.proxy(this.add,this))
			this.$name = $(".main h3")
			this.$price = $(".pink em").eq(1).text()
			this.$img = $(".side-in img").attr("src")
			this.$market = $(".market em").text()
			this.$num = $("#counts")
			this.$cash = $(".cash")
			this.and = 0
//			console.log(this.$cash)
//			console.log(JSON.parse($.cookie("goods")))
			if($.cookie("goods")!=null){
				this.$length = JSON.parse($.cookie("goods")).length
//				console.log(this.$length)
				this.$num.html(this.$length)
				this.rendering()
				this.$cash.html()
			}
			
//			console.log($(".wrap ul"))
		}
		add(){
			if($(".hover span").eq(0).html()==undefined||$(".hover span").eq(1).html()==undefined){
				$(".view-buybars .buy-type").html("请选择商品")
				setTimeout(function(){
					$(".view-buybars .buy-type").html("单独购买")
				},1000)
				return;
			}
			this.$count = $("#num").val()
			this.$color = $(".shoes-color .hover span").text()
			this.$other = $(".shoes-size .hover span").text()
			if($.cookie("goods")==null){
				$.cookie("goods",`[{
					"name":"${this.$name.text().substring(4)}",
					"price":"${this.$price}",
					"img":"${this.$img}",
					"oldprice":"${this.$market}",
					"color":"${this.$color}",
					"other":"${this.$other}",
					"num":"${this.$count}"
				}]`,{expires:7})
			}else{
				let a = {
					"name":this.$name.text().substring(4),
					"price":this.$price,
					"img":this.$img,
					"oldprice":this.$market,
					"color":this.$color,
					"other":this.$other,
					"num":this.$count
				}
				let s = JSON.parse($.cookie("goods"))
				s.push(a)
				s = JSON.stringify(s)
				$.cookie("goods",s,{expires:7})
			}
			this.$length = JSON.parse($.cookie("goods")).length
			this.$num.html(this.$length)
			if($(".cartop ul").length == 0){
//				console.log($(".wrap ul").length)
				this.rendering()
			}else{
				let res = JSON.parse($.cookie("goods"))
//				console.log(res[res.length - 1])
				let item = res[res.length - 1]
//				$(".wrap").css({
//					display:"none"
//				})
//				$(".cartop").append("<ul></ul>")
//				$(".fixed-cart-center").append("<ul></ul>")
//				$(res).each(function(index,item){
	
	
					this.and = item.price*item.num + this.and
					$(".cash").html(this.and.toFixed(2))
					
					var li = $(`<li>
								<a href="###"><img src="${item.img}"/></a>
								<a href="">${item.name}</a>
								<p>${item.color}-${item.other}</p>
								<p>
									¥${item.price}<br />
									<span>x${item.num}</span>
								</p>
							</li>`)
					var lis = $(`<li>
								<a href="###"><img src="${item.img}"/></a>
								<a href="">${item.name}</a>
								<p>${item.color}-${item.other}</p>
								<p>
									¥${item.price}<br />
									<span>x${item.num}</span>
								</p>
							</li>`)
					$(".cartop ul").append(lis);
					$(".fixed-cart-center ul").append(li)
//				})
			}
			
		}
		rendering(){
			var _this = this
			let res = JSON.parse($.cookie("goods"))
			$(".wrap").css({
				display:"none"
			})
			$(".cartop").append("<ul></ul>")
			$(".fixed-cart-center").append("<ul></ul>")
			$(res).each(function(index,item){
				_this.and = item.price*item.num + _this.and
//				console.log(and.toFixed(2))
				$(".cash").html(_this.and.toFixed(2))
				var li = $(`<li>
							<a href="###"><img src="${item.img}"/></a>
							<a href="">${item.name}</a>
							<p>${item.color}-${item.other}</p>
							<p>
								¥${item.price}<br />
								<span>x${item.num}</span>
							</p>
						</li>`)
				var lis = $(`<li>
							<a href="###"><img src="${item.img}"/></a>
							<a href="">${item.name}</a>
							<p>${item.color}-${item.other}</p>
							<p>
								¥${item.price}<br />
								<span>x${item.num}</span>
							</p>
						</li>`)
				$(".cartop ul").append(lis);
				$(".fixed-cart-center ul").append(li)
			})

		}
	}
	return new Goods()
})	