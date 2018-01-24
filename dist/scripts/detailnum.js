define(["jquery"],function($){
	class Num{
		constructor(){							//购买数量限制模块
			
		}
		init(){
			this.$leftbtn = $("#leftbtn")
			this.$rightbtn = $("#rightbtn")
			this.$num = $("#num")
			this.$limit = $(".xiangou")
			this.$leftbtn.on("click",$.proxy(this.reduce,this))
			this.$rightbtn.on("click",$.proxy(this.add,this))
		}
		reduce(){
			this.constantl =parseInt(this.$num.val()) 
			if(this.constantl == 1){
				return ;
			}
			this.$limit.css({
				display:"none"
			})
			this.constantl = this.constantl - 1
			this.$num.val(this.constantl)
		}
		add(){
			this.constantr =parseInt(this.$num.val()) 
			if(this.constantr == 5){
				return ;
			}
			if(this.constantr == 4){
				this.$limit.css({
					display:"block"
				})
				this.constantr = this.constantr + 1
				this.$num.val(this.constantr)
				return ;
			}
			
			this.constantr = this.constantr + 1
			this.$num.val(this.constantr)
//			console.log(this.constantr)
		}
	}
	return new Num()
})