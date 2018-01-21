define(["jquery"],function($){
	class Map{
		constructor(){}
		init(){
			this.$btn = $(".imgsbar  img")//选出需要点击的标签
//			console.log(this.$btn)
			this.$btn.on("click",$.proxy(this.change,this))
			this.$big = $(".side-in img")//需要改变图的选框
			this.$large = $(".bigbox img")
			
			
			this.$shell = $("#shell")
			this.$shell.on("mouseover",$.proxy(this.appear,this))
			this.$shell.on("mouseout",$.proxy(this.disappear,this))
			this.$more = $("#more")
			
			
			this.$li = $(".shoes-color a")
			this.$div = $(".shoes-color a div")
			this.$i = $(".shoes-color a i")
//			console.log(this.$li)
			this.$li.on("click",$.proxy(this.changes,this))
			
			this.$cm = $(".shoes-size a")
			this.$cm.on("click",$.proxy(this.cha,this))
			this.$cmdiv = $(".shoes-size a div")
			this.$cmi = $(".shoes-size a i")
		}
		cha(event){
//			console.log(1)
			let target = event.target||window.event.target
//			console.log(target)
			if($(target).parent().hasClass("hover")){
				console.log(1)
				this.$cm.css({
					border:"1px solid #b8b7bd;",
	//				margin:"-1px"
				})
				this.$cmdiv.css({
					display:"none"
				})
				this.$cmi.css({
					display:"none"
				})
				$(target).parent().removeClass("hover")
			}else{
				this.$cm.removeClass("hover")
				console.log(2)
				this.$cm.each(function(index,item){
					$(item).css({
						border:"1px solid #b8b7bd;",
					})
				})
				this.$cmdiv.css({
					display:"none"
				})
				this.$cmi.css({
					display:"none"
				})
				$(target).parent().addClass("hover")
				$(target).parent().children().css({
					display:"inline-block"
				})
			}
		}
		disappear(){
			this.$more.css({
				display:"none"
			})
		}
		appear(){
			this.$more.css({
				display:"block"
			})
		}
		changes(event){						//按钮的样式改变
			
			let target = event.target||window.event.target
			if($(target).parent().hasClass("hover")){
				this.$li.css({
					border:"1px solid #b8b7bd;",
	//				margin:"-1px"
				})
				this.$div.css({
					display:"none"
				})
				this.$i.css({
					display:"none"
				})
				$(target).parent().removeClass("hover")
			}else{
				this.$li.removeClass("hover")
				this.$li.each(function(index,item){
					$(item).css({
						border:"1px solid #b8b7bd;",
					})
				})
				this.$div.css({
					display:"none"
				})
				this.$i.css({
					display:"none"
				})
				$(target).parent().addClass("hover")
				$(target).parent().children().css({
					display:"inline-block"
				})
			}
			
//			console.log($(target).parent().parent())
			
			this.$index = $(target).parent().parent().index()
//			console.log(this.$index)
			this.$case = this.$btn.eq(this.$index)
			
			this.$btn.each(function(index,item){
				$(item).parent().css({
					borderColor:"#fff"
				})
			})
			this.$now = this.$case.attr("src")
			this.$case.parent().css({
				borderColor:"#ff5482"
			})
			this.src()
		}
		change(event){						//按钮的样式改变
			let target = event.target||window.event.target
//			console.log($(target).parent().parent())
			this.$index = $(target).parent().index()
//			console.log(this.$index)
			this.$case = this.$btn.eq(this.$index)
			
			this.$btn.each(function(index,item){
				$(item).parent().css({
					borderColor:"#fff"
				})
			})
			this.$now = this.$case.attr("src")
			this.$case.parent().css({
				borderColor:"#ff5482"
			})
			this.src()
		}
		src(){
//			console.log(this.$now)
			this.$big.removeAttr("src")					//变换img之前先删掉之前的属性
			this.$large.removeAttr("src")
			this.$big.attr("src",this.$now)
			this.$large.attr("src",this.$now)			//重新添加属性
//			console.log(this.$big.attr("src"))
		}
	}
	return new Map()
})