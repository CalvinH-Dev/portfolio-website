import { Directive, ElementRef, inject, OnDestroy, OnInit } from "@angular/core";

@Directive({
	selector: "[appAnimationOnScroll]",
})
export class AnimateOnScroll implements OnInit, OnDestroy {
	private static observer: IntersectionObserver | null = null;
	private el = inject(ElementRef);
	private element: HTMLElement;

	constructor() {
		this.element = this.el.nativeElement;
		this.element.classList.add("reveal-element");
	}

	ngOnInit() {
		if (typeof window === "undefined") return;

		if (!AnimateOnScroll.observer) {
			AnimateOnScroll.observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						const target = entry.target as HTMLElement;

						if (entry.isIntersecting) {
							target.classList.add("in-view");
						} else {
							target.classList.remove("in-view");
						}
					});
				},
				{ threshold: 0.2, rootMargin: "0px 10%" },
			);
		}

		AnimateOnScroll.observer.observe(this.element);
	}

	ngOnDestroy() {
		AnimateOnScroll.observer?.unobserve(this.element);
	}
}
