define(["jquery"],function($,Father,Son){
	class overGoodsCarTop{
		constructor(Father,Son){
			
		}
		init(Father,Son){
			this.$father = Father
			this.$father.on("mouseover",$.proxy(this.block,this))
			this.$son = Son
			this.$father.on("mouseout",$.proxy(this.dispear,this))
		}
		block(){
			this.$son.css({
				display:"block"
			})
		}
		dispear(){
			this.$son.css({
				display:"none"
			})
		}
	}
	return  overGoodsCarTop
})