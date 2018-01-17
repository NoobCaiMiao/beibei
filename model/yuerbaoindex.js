(function(){
//	var 
//	console.log(2)
    var a = document.getElementsByTagName("body")[0]
	document.body.onmousewheel = function(event) {
//		console.log()
		var scrolltop = document.documentElement.scrollTop||document.body.scrollTop
		console.log(a.clientHeight)
	    var evt = event || window.event;
//	    console.dir(event);	
	    if(evt.wheelDelta){
			if(evt.wheelDelta>0){
				console.log(1)
				a.style.marginTop = -400 + "px"
			}else{
				console.log(2)
			}
		}else if(evt.detail){
			if(-evt.detail>0){
				console.log(3)
			}else{
				console.log(4)
			}
		}
	};
})()
