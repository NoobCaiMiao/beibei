define(["jquery"],function($){
	class Tab{
		constructor(){
			//选项卡功能，左侧ul为鼠标滑过区，右边为选项卡内容区
		}
		init(){
			var setup = {							//设置ajax变量
				url:"/beibei",
				type:"GET",
				context:this
			}
			this.$ul = $(".tab-title")				//获取将要滑动的li标签的父级
			this.$tab = $(".classify-tab")			//获取选项卡总体
//			console.log(this.$li)
			$.ajax(setup).then(this.reding)			//ajax请求数据
		}
		reding(res){								//取数据方法
//			console.log(res)
			let _this = this
			this.livalue = res.main_categorys
			this.livalue.forEach(function(item,index){//遍历取出来的数据
//				console.log(item,index)
				let $li = $("<li>"+item.category_name+"</li>");//创建li标签，为选项卡左侧标签
//				console.log($li.html())
				_this.$ul.append($li);					//将新生成的li标签放入ul中
//				console.log(item.subdivision_categorys)
				_this.content(item.subdivision_categorys)//选项卡内容获取，绑定方法
			})
			this.$li = $(".tab-title li")				//选中所有的li
			this.$tabcontent = $(".classify-tab div")	//选中所有的选项卡内容区
//			console.log(this.$tabcontent)
			this.$li.eq(0).addClass("tab-hover-default")//设置默认样式   第一个li显示样式
			this.$tabcontent.eq(0).css({				//默认样式  第一个内容区域显示
				zIndex:"1",
				display:"block"
			})
			this.$li.on("mouseover",$.proxy(this.change,this))//鼠标滑过li时绑定事件，样式改变
		}
		content(ress){									//选项卡内容区数据填充
			let _this = this
			this.$content = $("<div class='tab-content'></div>")//创建父级div
			ress.forEach(function(item,index){					//遍历所有数据
//				console.log(item,index)
				let $dl = $("<dl><dt><img src='"+item.img+"'/></dt><dd>"+item.desc+"</dd></dl>")
				_this.$content.append($dl)//将相应数据放入指定位置 ，并将新生成的dl放进div队列
			})
			this.$tab.append(this.$content)//将父级div放入选项卡
		}
		change(e){									//样式改变方法
//			this.$li.eq().addClass("tab-hover-default")
			var target = e.target
//			console.log(this)
//			console.log($(target).index())
			$(".tab-title").children().each(function(){  //遍历li
				$(this).removeClass("tab-hover-default")//鼠标没有滑过的li删除class样式
			})
			$(".classify-tab div").each(function(){		//遍历选项卡内容区，不应该显示的内容区隐藏，zindex为0
				$(this).css({
					zIndex:"0",
					display:"none"
				})
			})
			this.$li.eq($(target).index()).addClass("tab-hover-default")//鼠标滑过的li显示样式，添加class名
			this.$tabcontent.eq($(target).index()).css({//对应的选项卡内容区显示
				zIndex:"1",
				display:"block"
			})
		}
	}
	return new Tab()
})  