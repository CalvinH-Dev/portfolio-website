import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class Tokens {
	private csrfToken?: string;

	async getCsrfToken(): Promise<string> {
		if (this.csrfToken) {
			return this.csrfToken;
		}

		const res = await fetch("/csrf.php", {
			credentials: "include",
		});

		const data = await res.json();
		this.csrfToken = data.csrf;

		return this.csrfToken!;
	}
}
