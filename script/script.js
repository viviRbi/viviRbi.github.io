/*---------------------
     Scroll nav bar
----------------------*/


//borrow from the internet
window.addEventListener('scroll', debounce(navColor));

// Got keyword scroll top and window.pageYoffset from the internet
function navColor(e){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.querySelector(".container-nav").classList.add("container-nav-white");
	}else{
		document.querySelector(".container-nav").classList.remove("container-nav-white");
	}
	var scrollTop = window.pageYOffset;
}

//borrow from the internet
function debounce(func, wait =15, immediate = true){
	var timeout;
	return function(){
		var context = this, argArr = arguments;
		var later = function(){
			timeout = null;
			if (!immediate) func.apply(context, argArr);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, argArr);
	};
};