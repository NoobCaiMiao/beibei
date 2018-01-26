# read me

贝贝网：
	贝贝网，杭州贝购科技有限公司旗下网站，创立于2014年4月，是国内领先的母婴特卖平台。
	贝贝网以品牌正品、独家折扣、限时抢购为特色，主要提供童装、童鞋、玩具、用品等商品的特卖服务，产品适用于0—12岁的婴童以及生产前后的妈妈们。贝贝网专注于妈妈群体的服务，致力于整合国内外最优质的孕婴童品牌供应商，打造妈妈宝贝专属的一站式购物平台



### 主页
顶部nav滑过显示，隐藏功能  已完成
右侧导航栏  在售分类  为Nginx反向代理请求数据做的选项卡    已完成
模糊搜索   已完成
右侧有悬浮框返回顶部   已完成
head购物车     已完成
右侧悬浮购物车  已完成
瀑布流加载    已完成
瀑布流加载两次停止加载，点击“点击展开更多惊喜”才能继续加载，不是bug


###详情列表页
放大镜  已完成
放大镜-小图选框-中间规格选取联动效果    已完成
颜色与规格同时勾选才能加入购物车    已完成
选取的颜色或规格有标记
“查看尺码”弹出整屏信息   已完成
评论区分页效果 已完成
楼梯效果  已完成
点击购买弹出登录/注册界面		已完成
表单验证  已完成
登录账号：17343087569
密码：123456
不登录不能加入购物车
登陆后点击按钮“单独购买”即时加入购物车		已完成

###物品列表页
按折扣排序   已完成
按价钱排序   已完成
左侧简单倒计时    已完成


###“育儿宝”-yuerbao.html
当不能自动播放轮播图吧

###limited.html
有个稍稍复杂的倒计时  已完成

Nginx   配置文件



server {
        listen       81;
        server_name  localhost;
        # root D:/root/;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
       location / {
            root   html/project/;
            index  index.html index.htm;
       }

       location = /sina{
          proxy_pass http://www.sina.com.cn;
       }

       location = /baidu {
	       	proxy_pass https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=nihao;
       }
       location = /zcool{
       		proxy_pass http://www.zcool.com.cn/recommend/contentRecommend;
       }
       location = /beibei{
       		proxy_pass http://sapi.beibei.com/item/category-100.html;
       }
       location = /beibeiSearch{
       		proxy_pass http://api.beibei.com/mroute.html;
       }
       location = /beibeiPaging{
       		proxy_pass http://www.beibei.com/rate/get/25859918-3-0.html;
       }
}




