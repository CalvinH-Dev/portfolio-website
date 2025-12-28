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

import { provideHttpClient, withFetch } from "@angular/common/http";

import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig } from "@angular/common";
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
		provideHttpClient(withFetch()),
		{
			provide: IMAGE_CONFIG,
			useValue: {
				breakpoints: [180, 360, 480, 640, 960, 1280],
			},
		},
		{
			provide: IMAGE_LOADER,
			useValue: (config: ImageLoaderConfig) => {
				if (config.width) {
					return `/img/loader/${config.width}/${config.width}_${config.src}`;
				} else {
					return `/img/loader/original/${config.src}`;
				}
			},
		},
		provideLottieOptions({
			player: () => import("lottie-web/build/player/lottie_light"),
		}),
	],
};
