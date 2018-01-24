define(["jquery"],function($){
	class Paging{
		constructor(){
			
		}
		init(){
			$.get("json/json.json").then($.proxy(this.reding,this))
			this.$page = $(".pagination")
			this.$a = $(".eve-page")
			this.$span = $(".pagination span")
			this.$a.on("click",$.proxy(this.article,this))
			this.$flag = 0
			this.$pre = $(".pre-page")
			this.$next = $(".next-page")
			
			this.$comments = $(".comments-box")
			
			this.$pre.on("click",$.proxy(this.discount,this))
			this.$next.on("click",$.proxy(this.add,this))
			
			this.$omit1 = $(".omit1")
			this.$omit2 = $(".omit2")
		}
		add(){
			++this.$flag
			var _this = this
//			console.log(this.$flag)
			if(this.$flag >= 4){
				this.$omit1.css({
					display:"inline-block"
				})
				if(this.$flag <= this.$max-3){
					this.$a.each(function(index,item){
						if((_this.$flag) == $(item).html()){
//							console.log($(item))
							$(item).html(_this.$flag+1)
							$(item).next().html(_this.$flag+2)
							$(item).prev().html(_this.$flag)
							$(item).next().next().html(_this.$flag+3)
							$(item).prev().prev().html(_this.$flag-1)
						}
					})
				}
				
				
			}else{
				this.$omit1.css({
					display:"none"
				})
			}
			
			this.comments()
			this.$a.each(function(index,item){
				if((_this.$flag+1) == $(item).html()){
					_this.$a.removeAttr("id")
					$(item).attr("id","anow")
				}
				
			})
		}
		discount(){
			
			--this.$flag
//			console.log(this.$res.length)
			var _this = this
			
			if(this.$flag <= this.$max-3){
				this.$omit2.css({
					display:"inline-block"
				})
				if(this.$flag >= 3){
					this.$a.each(function(index,item){
						if((_this.$flag+4) == $(item).html()){
//							console.log(_this.$flag,$(item))
							$(item).html(_this.$flag+3)
	//						$(item).next().html(_this.$flag+2)
							$(item).prev().html(_this.$flag+2)
	//						$(item).next().next().html(_this.$flag+3)
							$(item).prev().prev().html(_this.$flag+1)
							$(item).prev().prev().prev().html(_this.$flag)
							$(item).prev().prev().prev().prev().html(_this.$flag-1)
						}
					})
				}
			}else{
				this.$omit2.css({
					display:"none"
				})
			}
			this.comments()
			this.$a.each(function(index,item){
				if((_this.$flag+1) == $(item).html()){
					_this.$a.removeAttr("id")
					$(item).attr("id","anow")
				}
				
			})
		}
		reding(res){
			this.$res = $(res)
//			console.log(this.$res.length)
			var _this = this
			$.each(this.$res,function(index,item){
				if(index >= _this.$flag*10 && index <= (_this.$flag*10+9)){
					_this.rope = $('<div class="comment">'+
										'<span class="comment-content">'+
											'<div class="comment-body">'+
												item.comment+
											'</div>'+
											'<div class="comment-author-baby">'+
												'宝宝：1岁1个月'+
											'</div>'+
										'</span>'+
										'<span class="comment-item-info">'+
											'<div class="itemInfo">'+
												'<div>'+item.sku_properties+'</div>'+
//												<div>鞋子尺码：125码/内长约12.5cm</div>
											'</div>'+
											'<div class="comment-tag">'+
												
											'</div>'+
										'</span>'+
										'<span class="comment-author">'+
											'<div class="comment-author-name">'+
												item.display_name+
											'</div>'+
											'<div class="comment-author-score">'+
												'<i class="iconfont">'+'&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;'+'</i>'+
											'</div>'+
										'</span>'+
									'</div>')
//					console.log(_this.rope)
					_this.$comments.append(_this.rope)
				}
			})
			this.$max =parseInt(this.$res.length/10) + 1
			this.$a.eq(6).html(this.$max)
			
		}
		article(event){
			let target = event.target||window.target   //点击目标
			
			this.$pagenum = $(target).html()			//点击目标大小
			
//			console.log(this.$pagenum)
			let Num = parseInt(this.$pagenum)
			
			this.$a.removeAttr("id")
			this.$num = parseInt(this.$pagenum)-1
			if(this.$num == this.$flag){
				return ;
			}
			if(Num>=4&&Num<=this.$max-3){
//				console.log(this.$a.eq(2))
				this.$a.eq(1).html(Num-2)
				this.$a.eq(2).html(Num-1)
				this.$a.eq(3).html(Num)
				this.$a.eq(4).html(Num+1)
				this.$a.eq(5).html(Num+2)
				this.$a.eq(3).attr("id","anow")
			}else if(Num == 27){
				this.$a.eq(1).html(Num-5)
				this.$a.eq(2).html(Num-4)
				this.$a.eq(3).html(Num-3)
				this.$a.eq(4).html(Num-2)
				this.$a.eq(5).html(Num-1)
				$(target).attr("id","anow")
			}
			else{
				$(target).attr("id","anow")
			}
			
			
			this.$flag = this.$num
//			console.log(this.$flag )
			this.comments()
		}
		comments(){
			
			if(this.$flag >= 4){			//判断   ...是否显示
				this.$omit1.css({
					display:"inline-block"
				})
			}else{
				this.$omit1.css({
					display:"none"
				})
			}
			
			if(this.$flag <= this.$max-5){
				this.$omit2.css({
					display:"inline-block"
				})
			}else{
				this.$omit2.css({
					display:"none"
				})
			}
			
			
			if(this.$flag == (this.$max-1)){   //判断上一页  下一页是否显示
				this.$next.css({
					display:"none"
				})
			}else{
				this.$next.css({
					display:"inline-block"
				})
			}
			if(this.$flag >= 1){
				this.$pre.css({
					display:"inline-block"
				})
			}else{
				this.$pre.css({
					display:"none"
				})
			}
			var _this = this
			let aim = $(".detail-info-c").eq(0).offset().top			//跳到评论区开始，从头看
			$(window).scrollTop(aim)
			$(".comment").remove()
			
			
			
			$.each(this.$res,function(index,item){
				if(index >= _this.$flag*10 && index <= (_this.$flag*10+9)){
					_this.rope = $('<div class="comment">'+
										'<span class="comment-content">'+
											'<div class="comment-body">'+
												item.comment+
											'</div>'+
											'<div class="comment-author-baby">'+
												'宝宝：1岁1个月'+
											'</div>'+
										'</span>'+
										'<span class="comment-item-info">'+
											'<div class="itemInfo">'+
												'<div>'+item.sku_properties+'</div>'+
//												<div>鞋子尺码：125码/内长约12.5cm</div>
											'</div>'+
											'<div class="comment-tag">'+
												
											'</div>'+
										'</span>'+
										'<span class="comment-author">'+
											'<div class="comment-author-name">'+
												item.display_name+
											'</div>'+
											'<div class="comment-author-score">'+
												'<i class="iconfont">'+'&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;'+'</i>'+
											'</div>'+
										'</span>'+
									'</div>')
					_this.$comments.append(_this.rope)
				}
			})
		}
	}
	return new Paging()
})  