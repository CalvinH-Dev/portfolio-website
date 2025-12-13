import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RoundText } from "app/components/svg/round-text/round-text";
import { DeviceService } from "app/services/device";
import { ScrollNavigationService } from "app/services/scroll-navigation";

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
	scrollNav = inject(ScrollNavigationService);

	onLinkClicked(event: MouseEvent, id: string) {
		this.closeMenu.emit(true);
		this.scrollNav.scrollToSection(event, id);
	}
}
