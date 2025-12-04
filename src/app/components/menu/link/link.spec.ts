import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuLink } from "./link";

describe("Link", () => {
	let component: MenuLink;
	let fixture: ComponentFixture<MenuLink>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MenuLink],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuLink);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
