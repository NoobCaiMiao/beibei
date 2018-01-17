require(["scripts/config.js"],function(){
	require(["jquery","over","overnav","overGoodsCarTop","tab","search","scroll","sidePanel","brand"],function($,over,overnav,overGoodsCarTop,tab,search,scroll,sidepanel,brand){
		over.init();
		overnav.init();
//		console.log(overGoodsCarTop)
		new overGoodsCarTop()
		.init($(".shoppingcar"),$(".shoppingsettle"));
		new overGoodsCarTop()
		.init($(".classify"),$(".classify-tab"));
		new overGoodsCarTop()
		.init($(".sex-age"),$(".sex-age-content"));
		tab.init();
		search.init();
		scroll.init();
		sidepanel.init();
		brand.init()
	})
})