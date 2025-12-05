import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RoundText } from "app/components/svg/round-text/round-text";
import { DeviceService } from "app/services/device";

@Component({
	selector: "app-menu-link",
	imports: [UpperCasePipe, RoundText, RouterLink],
	templateUrl: "./link.html",
	styleUrl: "./link.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLink {
	fragment = input<string>("");
	text = input<string>("");
	rotate = input<string>("");
	deviceService = inject(DeviceService);

	closeMenu = output<boolean>();

	onProjectRefClicked(event: MouseEvent, id: string) {
		this.closeMenu.emit(true);
		if (!this.deviceService.isDesktop()) return;

		event.preventDefault();
		event.stopPropagation();

		const scrollContainer = document.querySelector("main") as HTMLElement;
		if (!scrollContainer) return;

		if (id === "#" || id === "root") {
			scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
			return;
		}

		const target = document.getElementById(id);
		if (target && scrollContainer.contains(target)) {
			const targetPosition = target.offsetLeft;
			scrollContainer.scrollTo({
				left: targetPosition,
				behavior: "smooth",
			});
		}
	}
}
