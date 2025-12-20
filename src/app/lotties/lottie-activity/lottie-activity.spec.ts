import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LottieActivity } from "./lottie-activity";

describe("LottieActivity", () => {
	let component: LottieActivity;
	let fixture: ComponentFixture<LottieActivity>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LottieActivity],
		}).compileComponents();

		fixture = TestBed.createComponent(LottieActivity);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
