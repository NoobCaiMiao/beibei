require(["scripts/limitconfig.js"],function(){
	require(["jquery","limit","over","overnav","overGoodsCarTop","tab","search","scroll","sidePanel","brand","foodscar"],function($,limit,over,overnav,overGoodsCarTop,tab,search,scroll,sidepanel,brand,foodscar){
		limit.init();
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
		brand.init();
		foodscar.init()
	})
})