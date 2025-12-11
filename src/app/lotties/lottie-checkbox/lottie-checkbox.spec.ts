import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LottieCheckbox } from "./lottie-checkbox";

describe("LottieCheckbox", () => {
	let component: LottieCheckbox;
	let fixture: ComponentFixture<LottieCheckbox>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LottieCheckbox],
		}).compileComponents();

		fixture = TestBed.createComponent(LottieCheckbox);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
