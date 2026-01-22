import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, inject } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class Storage {
	private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	setItem(key: string, value: string): void {
		if (this.isBrowser) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}

	getItem(key: string): string | null {
		if (this.isBrowser) {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		}
		return null;
	}

	removeItem(key: string): void {
		if (this.isBrowser) {
			localStorage.removeItem(key);
		}
	}

	clear(): void {
		if (this.isBrowser) {
			localStorage.clear();
		}
	}
}
