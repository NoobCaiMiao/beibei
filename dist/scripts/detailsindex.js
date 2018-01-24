require(["scripts/detailsconfig.js"],function(){
	require(["jquery","magn","map","verification","num","val","form","scroll","paging","over","overnav","overGoodsCarTop","tab","search","scroll","sidePanel","brand","foodscar"],function($,magn,map,ver,num,val,form,scroll,paging,over,overnav,overGoodsCarTop,tab,search,scroll,sidepanel,brand,foodscar){
		magn.init();
		map.init();
		ver.init();
		num.init();
		val.init();
		form.init();
		scroll.init();
		paging.init();
		over.init();
		overnav.init();
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