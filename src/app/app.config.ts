import {
	ApplicationConfig,
	inject,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from "@angular/core";
import {
	IsActiveMatchOptions,
	provideRouter,
	Router,
	withInMemoryScrolling,
	withViewTransitions,
} from "@angular/router";

import { provideImageKitLoader } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration, withIncrementalHydration } from "@angular/platform-browser";

import { provideLottieOptions } from "ngx-lottie";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: "enabled",
				anchorScrolling: "enabled",
			}),
			withViewTransitions({
				onViewTransitionCreated: ({ transition }) => {
					const router = inject(Router);
					const targetUrl = router.currentNavigation()!.finalUrl!;

					const config: IsActiveMatchOptions = {
						paths: "exact",
						matrixParams: "exact",
						fragment: "ignored",
						queryParams: "ignored",
					};

					if (router.isActive(targetUrl, config)) {
						transition.skipTransition();
					}
				},
			}),
		),
		provideClientHydration(withIncrementalHydration()),
		provideHttpClient(withFetch()),
		provideImageKitLoader("https://ik.imagekit.io/dhpagryvx/Portfolio/"),
		provideLottieOptions({
			player: () => import("lottie-web/build/player/lottie_light"),
		}),
	],
};
