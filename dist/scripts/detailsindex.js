require(["scripts/detailsconfig.js"],function(){
	require(["jquery","magn","map","verification"],function($,magn,map,ver){
		magn.init();
		map.init();
		ver.init()
	})
})