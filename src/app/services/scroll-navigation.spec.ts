import { TestBed } from "@angular/core/testing";

import { ScrollNavigation } from "./scroll-navigation";

describe("ScrollNavigation", () => {
	let service: ScrollNavigation;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ScrollNavigation);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
