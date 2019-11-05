/*---------------------
     Scroll nav bar
----------------------*/
window.onscroll = function(){navColor()};
function navColor(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.querySelector(".container-nav").classList.add("container-nav-white");
	}else{
		document.querySelector(".container-nav").classList.remove("container-nav-white");
	}
	var scrollTop = window.pageYOffset;
		console.log(scrollTop);
}
