window.addEventListener(
	"wheel",
	(e) => {
		e.preventDefault();
		window.scrollBy({
			left: e.deltaY * 15,
			top: 0,
		});
	},
	{ passive: false },
);
