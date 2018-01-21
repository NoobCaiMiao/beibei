define(["jquery"],function($){
	class Mertab{
		constructor(){}
		init(){
			this.$btn = $("#mertab a")					//选中点击顶部选项卡事件按钮
			this.$li = $("#mertab li")					//li
			this.$tabs = $(".tabs")						//变换的内容区域
			this.$btn.on("click",$.proxy(this.change,this))
			
			this.$pear = $(".feedback")					//右侧fixed事件按钮
			this.$pear.on("click",$.proxy(this.full,this))
			this.$popup = $(".popup")					//弹出的显示区
			this.$close = $("#close")					//关闭按钮
			this.$close.on("click",$.proxy(this.close,this))
			this.$cancel = $("#cancel")					//取消按钮
			this.$cancel.on("click",$.proxy(this.close,this))
			
			this.$ques = $(".item-first")				//下拉选框点击事件按钮
			this.$ques.on("click",$.proxy(this.nb,this))
			this.$quesList = $(".ques-list")			//下拉选框
			this.flag = false							//插旗，用来记录下拉选框是否显示和下拉选框按钮的i标签运动状态
			this.$i = $(".item-first i")				//下拉选框按钮
			
			
			this.$sure = $("#sure")
			this.$sure.on("click",$.proxy(this.prompt,this))
			this.$pink = $(".pinkbox")
			
			this.$quesList.children().on("mouseover",$.proxy(this.hover,this))
			this.$quesList.children().on("click",$.proxy(this.nike,this))
		}
		prompt(){
			let txt = $(".item-first span").text()//错误信息填写弹出粉框
			console.log(txt)
			let _this = this
			if(txt=='请选择'){
//				console.log(1)
				this.$pink.slideDown(500,function(){
					setTimeout(function(){
						_this.$pink.slideUp()
					},1000)
				})
				return;
			}else if($("textarea").val()==""){
				console.log(2)
				$(".pinkbox span").html("请填写问题描述")
				this.$pink.slideDown(500,function(){
					setTimeout(function(){
						_this.$pink.slideUp()
					},1000)
				})
				return;
			}
//			let txts = txt.substring(0,txt.length-1)
//			console.log(txts)
		}
		nike(event){									//点击下拉选框的元素事件
			let target = event.target
			this.$quesList.children().each(function(index,item){
				$(item).css({
					color:"#4a4a4a"						//样式改变，变成字体红色，并且将其他字体设置成默认样式
				})
				$(item).children().remove()
			})
			$(target).css({
				color:"#ff4965"
			})
			$(target).append("<i class='iconfont'>&#xe6ba;</i>")//点击的目标添加对勾
			let txt = $(target).text()
			let txts = txt.substring(0,txt.length-1)			//去掉最后一个字符
			$(".item-first span").html(txts)					//用点击的目标内容替换点击按钮中的内容
			this.$quesList.css({
				display:"none"
			})
			this.flag = false									//改变旗帜状态
				this.$i.removeClass("rotate")					
				this.$i.addClass("rotate1")
			
		}
		hover(event){										//鼠标滑过下拉选框样式的改变
			let target = event.target
			this.$quesList.children().each(function(index,item){
				$(item).css({
					background:"#fff"
				})
			})
			$(target).css({
				background:"#f7f9fc"
			})
		}
		nb(){												//下拉选框按钮点击   下拉选框的显示与隐藏
			let _this = this
			if(this.flag==true){
				this.$quesList.animate({
					height:"0"
				},300,function(){
					_this.$quesList.css({
						display:"none",
					})
				})
				this.$i.removeClass("rotate")
				this.$i.addClass("rotate1")
				this.flag = false
				return ;
			}
			this.$i.removeClass("rotate1")
			this.$i.addClass("rotate")
			
			this.$quesList.css({
				display:"block",
				height:"0"
			})
			this.$quesList.animate({
				height:"254"
			},300)
			this.flag = true
		}
		close(){
			this.$popup.css({
				display:"none"
			})
			$("body").append(this.$wrap)
			$("body").css({
				overflow:"auto",
			})
		}
		change(event){
			let target = event.target					//事件本身
			let index = $(target).parent().index()		//对应事件的相对于父元素的第几位
			this.$tabs.each(function(index,item){		//遍历，初始化样式
				$(item).css({
					display:"none"
				})
			})
			this.$li.each(function(index,item){
				$(item).css({
					borderBottom:"3px solid transparent"
				})
			})
			this.$btn.each(function(index,item){
				$(item).css({
					color:"#36435c"
				})
			})
			this.$btn.eq(index).css({					//对应元素显示样式
				color:"#FF4965"
			})
			this.$li.eq(index).css({
				borderBottom:"3px solid #FF4965"
			})
			this.$tabs.eq(index).css({					//对应内容显示
				display:"block"
			})
		}
		full(event){								//去掉右侧滚动条，防止弹出悬浮框主HTML还可以滚动
			this.$popup.css({
				display:"block"
			})
			$("body").append(this.$wrap)
			$("body").css({
				overflow:"hidden",
			})
		}
	}
	return new Mertab()
})