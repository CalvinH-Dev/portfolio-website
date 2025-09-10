export interface ProjectInterface {
	name: string;
	about: TranslatableText;
	tech: TranslatableText;
	learning: TranslatableText;
	imageSrc: string;
	githubSrc: string;
	pageSrc: string;
}

interface TranslatableText {
	DE: string;
	EN: string;
}
