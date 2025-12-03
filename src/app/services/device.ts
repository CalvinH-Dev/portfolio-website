import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DeviceService {
	isDesktop() {
		if (typeof window === "undefined") return;

		return window.innerWidth >= 768 && window.innerHeight >= 700;
	}
}
