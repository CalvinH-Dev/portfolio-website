import { TestBed } from "@angular/core/testing";

import { LanguageService } from "./language";

describe("Languages", () => {
	let service: LanguageService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LanguageService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
