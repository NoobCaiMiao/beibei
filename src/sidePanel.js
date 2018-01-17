define(["jquery"],function($){
	class sidePanel{
		constructor(){}
		init(){
			this.$cart = $("#sidebar-cart")
			this.$app = $("#app")
			this.$kfzx = $("#kfzx")
			this.$elevator = $("#elevator")
			this.$cart.on("mouseover",this.cart)
			this.$app.on("mouseover",this.app)
			this.$kfzx.on("mouseover",this.kfzx)
			this.$elevator.on("mouseover",this.elevator)
			
			this.$cart.on("mouseout",this.Cart)
			this.$app.on("mouseout",this.App)
			this.$kfzx.on("mouseout",this.Kfzx)
			this.$elevator.on("mouseout",this.Elevator)
			this.$elevator.on("click",this.Elevators)
			
		}
		Elevators(){
			$(window).scrollTop(0)
		}
		cart(){
			$("#sidebar-cart").css({
				background:"#ff4965"
			})
			$("#sidebar-cart i").css({
				color:"#fff"
			})
			$(".fixed-cart").css({
				display:"block"
			})
		}
		app(){
			$("#app").css({
				background:"#ff4965"
			})
			$("#app i").css({
				color:"#fff"
			})
			$(".tel-fixed").css({
				display:"block"
			})
		}
		kfzx(){
			$("#kfzx").css({
				background:"#ff4965"
			})
			$("#kfzx i").html("客服在线")
			$("#kfzx i").css({
				color:"#fff",
				fontSize:"12px",
				lineHeight:"26px",
				fontWeight:"normal"
			})
		}
		elevator(){
			$("#elevator").css({
				background:"#ff4965"
			})
			$("#elevator i").html("回到顶部")
			$("#elevator i").css({
				color:"#fff",
				fontSize:"12px",
				lineHeight:"26px",
				fontWeight:"normal"
			})
		}
		Cart(){
			$("#sidebar-cart").css({
				background:"#fff"
			})
			$("#sidebar-cart i").css({
				color:"#ff4965"
			})
			$(".fixed-cart").css({
				display:"none"
			})
		}
		App(){
			$("#app").css({
				background:"#fff"
			})
			$("#app i").css({
				color:"#ff4965"
			})
			$(".tel-fixed").css({
				display:"none"
			})
		}
		Kfzx(){
			$("#kfzx").css({
				background:"#fff"
			})
			$("#kfzx i").html("&#xe641;")
			$("#kfzx i").css({
				color:"#ff4965",
				fontSize:"18px",
				lineHeight:"22px",
				fontWeight:"normal"
			})
		}
		Elevator(){
			$("#elevator").css({
				background:"#fff"
			})
			$("#elevator i").html("&#xe600;")
			$("#elevator i").css({
				color:"#ff4965",
				fontSize:"18px",
				lineHeight:"22px",
				fontWeight:"normal"
			})
		}
	}
	return new sidePanel()
})