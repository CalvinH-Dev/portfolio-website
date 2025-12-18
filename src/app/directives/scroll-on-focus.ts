import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
	selector: "[appScrollOnFocus]",
})
export class ScrollOnFocusDirective {
	private el = inject(ElementRef);

	@HostListener("focus")
	onFocus(): void {
		this.el.nativeElement.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}
}
