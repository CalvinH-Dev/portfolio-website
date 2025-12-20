import { Directive, ElementRef, inject, input, OnDestroy, OnInit, output } from "@angular/core";

export interface IntersectionObserverConfig {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
}

@Directive({
	selector: "[appIntersectionObserver]",
	standalone: true,
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
	visibleCallback = output<void>();
	hiddenCallback = output<void>();

	threshold = input<number | number[]>(0.1);
	rootMargin = input<string>("0px");
	root = input<Element | null>(null);

	private observer: IntersectionObserver | null = null;
	private elementRef = inject(ElementRef);

	ngOnInit(): void {
		this.initObserver();
	}

	private initObserver(): void {
		const config: IntersectionObserverInit = {
			root: this.root(),
			rootMargin: this.rootMargin(),
			threshold: this.threshold(),
		};

		this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), config);

		this.observer.observe(this.elementRef.nativeElement);
	}

	private handleIntersection(entries: IntersectionObserverEntry[]): void {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				this.visibleCallback.emit();
			} else {
				this.hiddenCallback.emit();
			}
		});
	}

	ngOnDestroy(): void {
		this.observer?.disconnect();
	}
}
