define(["jquery"],function($){
	class Search{
		constructor(){
			
		}
		init(){
			this.$search = $(".search")						// 选中搜索框 
			this.$input = $("#search")						//选中输入框
			this.$div = $(".search-info")					//搜索信息框
			this.$timer = null								//初始化定时器声明为空
//			console.log($(this.$input))						
			this.$input.on("focus",$.proxy(this.reding,this))//当鼠标焦点在搜索框时，绑定事件
			this.$input.on("blur",$.proxy(this.disapear,this))//当搜索框失去鼠标焦点时，绑定事件
		}
		reding(){
			clearInterval(this.timer)							//开启计时器之前先关闭计时器
			let _this = this									//异步，需要存个指针
			this.timer = setInterval(function(){				//开启定时器
				let word = $("#search").val()					//获取搜索框输入的内容
//				console.log(word)		
				var setup = {									//定义ajax变量
					url:"/beibeiSearch",
					type:"GET",
					data:{
						method:"beibei.item.search.suggest",
						keyword:word							//关键词为搜索框输入的内容
					},
					context:_this								//指针
				} 
				$.ajax(setup).then(_this.suggest)				//ajax请求数据
			},500)
		}
		suggest(res){
//			console.log($(res.search_result).length)
			let _this = this									//存指针
//			console.log(this.$div.children());
			this.$div.children().remove()						//在添加a标签之前，先把之前的a标签删除
			if($(res.search_result).length!=0){					//当没有输入内容时，请求回来的数据为空，不进行显示搜索内容服务
				this.$div.css({									//有数据返回时，改变搜索框的样式
					display:"block"
				})
//				console.log(2)
				$(res.search_result).each(function(index,item){				//遍历返回的数据，并且添加到搜索内容显示区
//					console.log(item)
					let searchitem = $("<a><span class='m-bn-keyword'>"+item.text+"</span><span class='m-bn-memo'>约"+item.count+"件&gt</span></a>")
					_this.$div.append(searchitem)
				})
//				this.$search.append(this.$div)
			}else{
//				clearInterval(this.timer)
				this.$div.css({
					display:"none"
				})
			}
		}
		disapear(){
			clearInterval(this.timer)
			this.$div.css({
				display:"none"
			})
		}
	}
	return new Search()
})