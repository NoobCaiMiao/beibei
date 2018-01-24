define(["jquery"],function($){
	class Form{
		constructor(){}
		init(){
			
		}init(){
			this.$btn = $(".btn")							//提交表单按钮
			this.$btn.on("click",$.proxy(this.boom,this))	//提交表单按钮点击事件	
			
			this.$inuser = $("#inuser")						//登录
			this.$inpass = $("#inpass")
			
			this.$setuser = $("#setuser")					//注册
			this.$setemail = $("#setemail")
			this.$setpass = $("#setpass")
			
			this.tel = /^1[0-9]{10,10}$/
			this.emi = /^([a-z]|\d){5,19}@[a-z]{2,10}\.[a-z]{2,8}$/i
			this.pas = /^[^/\\\*<>\|\?]{6,16}$/
			this.num = /^[0-9]{4,4}$/
			
			this.$bg = $(".left-bg")
			
			this.$noneinfo = $("#noneinfo")
			this.$falseinfo = $("#falseinfo")
			this.$passinfo = $("#passinfo")
			this.$falsepass = $("#falsepass")
			
			this.$noneinfo2 = $("#noneinfo2")
			this.$falseinfo2 = $("#falseinfo2")
			this.$passinfo2 = $("#passinfo2")
			this.$noneemail = $("#noneemail")
			this.$falseemail = $("#falseemail")
			
			this.$strong = $(".ver-member strong")
		}
		boom(event){
			let target = event.target || window.event.target
			
			
			this.$inUval = this.$inuser.val()		//登录中input标签中的value
			this.$inPval = this.$inpass.val()
			
			
			this.$setUval = this.$setuser.val()		//注册中input标签中的value
			this.$setEval = this.$setemail.val()
			this.$setPval = this.$setpass.val()
			this.$str = $(target).html()
//			console.log(this.$str)
			this.yanzheng()
		}
		yanzheng(){
			if(this.$str == '登录'){
				if(this.$inUval == ""){
					this.$strong.css({
						display:"none"
					})
					this.$noneinfo.css({
						display:"block"
					})
					//this.tel.test(this.$inUval)||this.emi.test(this.$inUval)
				}else if(!this.tel.test(this.$inUval)&&!this.emi.test(this.$inUval)){//输入的用户名既不是邮箱也不是手机号
					this.$strong.css({
						display:"none"
					})
					this.$falseinfo.css({
						display:"block"
					})
				}else{
					if(this.$inPval == ""){
						this.$strong.css({
						display:"none"
					})
						this.$passinfo.css({
							display:"block"
						})
					}else if(!this.pas.test(this.$inPval)){
						this.$strong.css({
							display:"none"
						})
						this.$falsepass.css({
							display:"block"
						})
					}else{
						if(this.$bg.width() < 200){
							this.$strong.css({
								display:"none"
							})
							$("#huadiv").css({
								display:"block"
							})
						}else{
							if(this.$inUval == 17343087569&&this.$inPval == 123456){
								$(".wrap-currency").css({
									display:"none"
								})
								$(".ver").css({
									display:"none"
								})
								$(".view-buybar").css({
									display:"none"
								})
								$(".view-buybars").css({
									display:"block"
								})
								$(".view-ActionBack").eq(0).html("173****4308")
								$(".view-ActionBack").eq(0).css({
									color:"#ff5482"
								})
								$(".view-ActionBack").eq(1).html("[退出]")
								$(".view-ActionBack").eq(1).css({
									color:"#555"
								})
							}
						}
					}
					
				}
			}else{
				if(this.$setUval == ""){
					this.$strong.css({
						display:"none"
					})
					this.$noneinfo2.css({
						display:"block"
					})
				}else if(!this.tel.test(this.$setUval)){
					this.$noneinfo2.css({
						display:"none"
					})
					this.$falseinfo2.css({
						display:"block"
					})
				}else{
					if(this.$setEval == ""){
						this.$noneemail.css({
							display:"block"
						})
					}else if(!this.num.test(this.$setEval)){
						this.$noneemail.css({
							display:"none"
						})
						this.$falseemail.css({
							display:"block"
						})
					}else{
						if(this.$setPval == ""){
							this.$passinfo2.css({
								display:"block"
							})
						}
					}
				}
			}
		}
	}
	return new Form()
})