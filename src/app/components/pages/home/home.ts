import { afterNextRender, ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Projects } from "app/components/sections/projects/projects";
import { WhyMe } from "app/components/sections/why-me/why-me";
import { firstValueFrom } from "rxjs";
import { LinkArrow } from "../../link-arrow/link-arrow";
import { Contact } from "../../sections/contact/contact";
import { Hero } from "../../sections/hero/hero";
import { Skills } from "../../sections/skills/skills";

@Component({
	selector: "app-home",
	imports: [WhyMe, LinkArrow, Contact, Hero, Skills, Projects],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
	/** ActivatedRoute instance injected via Angular's DI. */
	route = inject(ActivatedRoute);

	/** Current URL fragment (hash) if present, e.g., 'contact' for '/#contact'. */
	fragment: string | null = null;

	/**
	 * Home component constructor.
	 * Initializes fragment from the route and triggers scroll on initial render.
	 */
	constructor() {
		// Get the current fragment from the route
		firstValueFrom(this.route.fragment).then((f) => {
			this.fragment = f;
		});

		// Scroll to fragment after the first render
		afterNextRender(() => {
			this.onFragmentAtStart();
		});
	}

	/**
	 * Scrolls the main content container to the element corresponding to the current fragment.
	 *
	 * If the fragment is `"#"`, scrolls to the start of the container.
	 * Otherwise, scrolls smoothly to the element with `id` matching the fragment.
	 */
	onFragmentAtStart() {
		const scrollContainer = document.querySelector("main") as HTMLElement;

		if (!this.fragment) return;
		if (!scrollContainer) return;

		if (this.fragment === "#") {
			scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
			return;
		}

		const target = document.getElementById(this.fragment);
		if (target && scrollContainer.contains(target)) {
			const targetPosition = target.offsetLeft;
			scrollContainer.scrollTo({
				left: targetPosition,
				behavior: "smooth",
			});
		}
	}
}
