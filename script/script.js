/*---------------------
     Scroll nav bar
----------------------*/

window.addEventListener('scroll', debounce(navColor));

function navColor(e) {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector(".container-nav").classList.add("container-nav-white");
	} else {
		document.querySelector(".container-nav").classList.remove("container-nav-white");
	}
}

function debounce(func, wait = 15, immediate = true) {
	var timeout;
	return function () {
		var context = this, argArr = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, argArr);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, argArr);
	};
};

/*---------------------
     Projects Detail
----------------------*/
const detective = {
	name: 'Detective Riddles',
	tech: 'HTML, CSS, Javascript',
	des: 'Detective Riddles is a trivia webapp game that test and improve players\'s logical thinking. The game includes scoring, animation, fetching Json data, scoring system and local storage.',
	live: 'https://vivirbi.github.io/viviRbi.github.io-detective-riddle/',
	git: 'https://github.com/viviRbi/viviRbi.github.io-detective-riddle',
	img: '../img/project/greatreads.png'
}
const tessa = {
	name: 'Tessa',
	tech: 'React, Express, HTML, CSS, JavaScript, MockFlow(an online wireframe tool)',
	des: 'The website let you search houses for rent and buy in Texas. It\'ll display a list of houses base on the button you click plus the chosen city. Aside from that, you can type the city name to go directly to that city\'s houses from homepage. And finally, it had another detail page where you can check out all the picture and information of the house, as well as save and delete it.',
	live: 'https://vyle-texas-estate.netlify.com/',
	git: 'https://github.com/viviRbi/real-estate-p2',
	img: '../img/project/greatreads.png'
}
const greatreads = {
	name: 'Great Reads',
	tech: 'React, HTML, CSS, Javascript, Express, Mongo, Mongoose, Pencil(a Wireframe tool), Krita(a photoshop alternative)',
	des: 'A group project of four where I worked on the front-end. Our project idea was to created a Goodreads clone. So we created an app called Great Reads that has some of the same functionality as Goodreads. The app opens to the main page where we have all the books. <br> <br> My main responsibility in this project inludes manage pull requests, coding, styling all functionality in the main and book detail page (linking routes, pop-up form, get/post/update/delete request to the backend, store/delete saved book in local storage), drawing wireframe mockup.',
	live: 'https://greatreads.netlify.com/',
	git: 'https://github.com/viviRbi/Great-reads',
	img: '../img/project/greatreads.png'
}

/*---------------------
     Projects Display
----------------------*/
const projects = [tessa, greatreads, detective]
const title = document.querySelectorAll('#work .work .pic .name')
const popUp = document.querySelector('#pop-up')

for (let i = 0; i < title.length; i++) {
	title[i].addEventListener('click', function () {
		popUpDis(i)
	})
}

function popUpDis(i) {
	popUp.innerHTML = `
			<div class='pop-up-overlay'>
			<div class='project-button'>
				<button class="transition prev">
					<div class="transition left"></div>
				</button>
				<button class="transition next">
					<div class="transition right"></div>
				</button>
			</div>
			<article class='pop-up'>
				<h1 class="title">${projects[i].name}</h1>
				<div class='pop-up-content'>
					<section class="img-holder">
						<div class="pro-img" style="background-image: url(${projects[i].img});"></div>
					</section>
					<section class='detail'>
						<p>Technology: ${projects[i].tech}</p>
						<p>${projects[i].des}</p>
						<div class='detail-back'><a class="back transition">Back</a></div>
						<div class="detail-link">
							<a href=${projects[i].git} class="transition">Git</a>
							<a href=${projects[i].live} class="transition">Live</a>
						</div>
					</section>
				</div>
			</article>
		</div>`

	const back = document.querySelector('#work .detail-back .back')
	back.addEventListener('click', function () {
		popUp.removeChild(popUp.childNodes[1])
	})

	const arrows = document.querySelectorAll('.project-button button')
	arrows[0].addEventListener('click', function () {
		if (i == 0) { i = projects.length }
		i -= 1
		popUpDis(i)
	})

	arrows[1].addEventListener('click', function () {
		if (i == projects.length - 1) { i = -1 }
		i += 1
		console.log(i)
		popUpDis(i)
	})
}

/*---------------------
     Form
----------------------*/
const submitBtn = document.querySelector('#submit')
const thanksPar = document.querySelector('#thanks')
const inputs = document.querySelectorAll('input')
const submit = false

if (document.querySelector('#thanks').classList.contains("visible")) {
	thanksPar.classList.remove("visible")
}

submitBtn.addEventListener('click', function () {
	for (let i = 0; i < inputs.length; i++) {
		if (!inputs[i].validity.valid) {
			e.preventDefault()
			submit = false
			return
		}
		submit = true
		if (submit) {
			thanksPar.classList.add("visible")
			location.reload()
		}
	}
})
