window.addEventListener(
	"wheel",
	(e) => {
		e.preventDefault();
		window.scrollBy({
			left: e.deltaY * 5,
			top: 0,
		});
	},
	{ passive: false },
);

setTimeout(() => {
	document.querySelectorAll('a[href="#projects"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			const id = link.getAttribute("href").substring(1);
			const target = document.getElementById(id);

			if (target) {
				e.preventDefault();

				target.scrollIntoView({
					behavior: "smooth",
					inline: "start",
					block: "nearest",
				});
			}
		});
	});
}, 3000);
