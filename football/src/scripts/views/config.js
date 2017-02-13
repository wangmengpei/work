angular.module("mapp")
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/guide");
		$stateProvider
			.state("guide",{
				url: "/guide",
				templateUrl: "./src/scripts/tpls/guide.string",
				controller: "guideCtrl"
			})
			.state("home",{
				url: "/home",
				templateUrl: "./src/scripts/tpls/home.string"
			})
			.state("home.oneH",{
				url: "/oneH",
				templateUrl: "./src/scripts/tpls/oneH.string",
				controller: "oneCtrl"
			})
			.state("home.twoH",{
				url: "/twoH",
				template: "two"
			})
			.state("home.threeH",{
				url: "/three",
				template: "three"
			})
			.state("home.fourH",{
				url: "/four",
				template: "four"
			})
	})