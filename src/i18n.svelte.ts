import { getLocaleFromQueryString, init, isLoading, locale, register } from 'svelte-i18n';

register('kr', () => import('./locales/kr.json'));
register('en', () => import('./locales/en.json'));

console.log('getLocaleFromQueryString()', getLocaleFromQueryString('lang'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromQueryString('lang')
});

class LocaleStore {
	isLoading = $state(true);
	locale: string | undefined | null = $state(undefined);
	isKr = $derived(this.locale === 'kr');
	isEn = $derived(this.locale === 'en');

	constructor() {
		isLoading.subscribe((isLoading) => {
			this.isLoading = isLoading;
			console.log(`isLocaleLoading: ${this.isLoading}`);
		});

		locale.subscribe((locale) => {
			this.locale = locale;
			console.log(`currentLocale: ${this.locale}`);
		});
	}
}

export const localeStore = new LocaleStore();
