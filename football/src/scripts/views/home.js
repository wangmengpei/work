function oneCtrl($scope,$http,$timeout){
		var ml = $(".header").find("a");
		ml.on("click", function () {
		    var index = $(this).index();
		    ml.eq(index).addClass("on").siblings().removeClass();
		    mySwiper[0].slideTo(index);
		});

		var mls = $(".one-top").find("li");
		mls.on("click", function () {
		    var index = $(this).index();
		    mls.eq(index).addClass("one-on").siblings().removeClass();
		    mySwiper[1].slideTo(index);
		});

		var mySwiper = new Swiper('.swiper-container',{
		    initialSlide:0,
		    onSlideChangeStart: function (swiper) {
		        var flagId = swiper.container[0].id;
		        var index = swiper.activeIndex;
		        if (flagId == "con1") {
		            $(".header").find("a").eq(index).addClass("on").siblings().removeClass("on");
		        }else{
		            $(".one-top").find("li").eq(index).addClass("one-on").siblings().removeClass("one-on");
		        }
		    }
		});


		$http.get("./src/scripts/views/data.json")
			 .success(function(ren){
			 	$scope.data = ren.data;
			 	console.log(ren.data);
			 })
			 $(document).on("touchmove",function(e){e.preventDefault();})
			 $timeout(function(){
				var myscroll = new IScroll(".one-list");
				myscroll.refresh();
			},1000)
		
}

angular.module('mapp')
	.controller()
	.controller('oneCtrl',oneCtrl);