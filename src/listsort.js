define(["jquery"],function($){
	class Listsort{
		constructor(){}
		init(){
			this.$btn = $(".sort li").eq(1)
			this.$btn.on("click",$.proxy(this.sort,this))
			this.$barBtn = $(".sort li").eq(2)
			this.$barBtn.on("click",$.proxy(this.sorts,this))
		}
		sorts(event){
			$(".sort a").css({
				backgroundColor: "#f8f9fa",
				color:"#000"
			})
			$(event.target).css({
				color: "#ff4965",
    			background: "#fff"
			})
			this.$list = $(".j-mart li")
			this.$price = $(".price")
			this.$pricet = $(".price-decimal")
			console.log(this.$price,this.$pricet)
			var _this = this
			var arry = new Array()
			this.$list.each(function(index,item){			//遍历商品列表
//				console.log(index,item)
//				console.log($(item).html())
//				console.log(parseFloat(_this.$discount.eq(index).html()))
				let dis = parseFloat(_this.$price.eq(index).html())+parseFloat(_this.$pricet.eq(index).html())
				console.log(dis)
				arry[index] = [dis,$(item).html()]
//				arry[index][1] = item.html()
			})
//			console.log(arry)
			this.$arry = arry
			console.log(arry)
			this.quickSort()
		}
		sort(event){
			$(".sort a").css({
				backgroundColor: "#f8f9fa",
				color:"#000"
			})
			$(event.target).css({
				color: "#ff4965",
    			background: "#fff"
			})
			this.$list = $(".j-mart li")					//点击时获取商品列表
			this.$discount = $(".item-list .discount")		//需要比较的数字
			
//			console.log(this.$list)
			var _this = this
			var arry = new Array()
			this.$list.each(function(index,item){			//遍历商品列表
//				console.log(index,item)
//				console.log($(item).html())
//				console.log(parseFloat(_this.$discount.eq(index).html()))
				let dis = parseFloat(_this.$discount.eq(index).html())
				arry[index] = [dis,$(item).html()]
//				arry[index][1] = item.html()
			})
//			console.log(arry)
			this.$arry = arry
			this.quickSort()
			
			
		}
		quickSort(arr){
			var times=0;  								//比较大小的方法   快速排序
			var quickSort=function(arr){   
			    										//如果数组长度小于等于1无需判断直接返回即可  
			    if(arr.length<=1){  
			        return arr;  
			    }  
			    var midIndex=Math.floor(arr.length/2);	//取基准点  
			    var midIndexVal=arr.splice(midIndex,1);	//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]  
			    var left=[];							//存放比基准点小的数组  
			    var right=[];							//存放比基准点大的数组  
			    										//遍历数组，进行判断分配  
			    for(var i=0;i<arr.length;i++){  
			        if(arr[i]<midIndexVal){  
			            left.push(arr[i]);				//比基准点小的放在左边数组  
			        }  
			        else{  
			            right.push(arr[i]);				//比基准点大的放在右边数组  
			        }  
														//	console.log("第"+(++times)+"次排序后："+arr);  
			    }  
			    										//递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；  
			    return quickSort(left).concat(midIndexVal,quickSort(right));  
			};  
//			console.log(quickSort(arry));  
			this.$arry = quickSort(this.$arry)
//			console.log(this.$arry)
			var _this = this
			this.$list.each(function(index,item){
				$(item).html(_this.$arry[index][1])		//输入对应的html（）
			})
		}
	}
	return new Listsort()
})