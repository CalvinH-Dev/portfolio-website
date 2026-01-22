import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BaseLottie } from "./base-lottie";

describe("BaseLottie", () => {
	let component: BaseLottie;
	let fixture: ComponentFixture<BaseLottie>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BaseLottie],
		}).compileComponents();

		fixture = TestBed.createComponent(BaseLottie);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
