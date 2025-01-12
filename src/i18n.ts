import { register } from 'svelte-i18n';

register('kr', () => import('./locales/kr.json'));
register('en', () => import('./locales/en.json'));
