require(["scripts/listconfig.js"],function(){
	require(["jquery","listjson","listsort"],function($,listjson,listsort){
		listjson.init();
		listsort.init();
	})
})