import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

// Google Apps Script Web App URL (설정 후 업데이트 필요)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw_0DNpYxxKEfU5pflrkBXtNSAyhDezhcRWIeFIwBctytA_GEtcrEdv7QZglKV_L2h5/exec';

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname')?.toString().trim();
		const rsvp = formData.get('rsvp')?.toString();
		const timestamp = new Date().toISOString();

		if (!name) {
			return fail(400, { missingName: true });
		}

		if (!rsvp) {
			return fail(400, { missingRsvp: true });
		}

		try {
			// Google Apps Script로 데이터 전송
			const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					rsvp: rsvp,
					timestamp: timestamp
				})
			});

			if (response.ok) {
				console.log(`RSVP from ${name}: ${rsvp} - Sent to Google Sheets`);
				return { success: true };
			} else {
				console.error('Failed to send to Google Sheets');
				return fail(500, { error: 'Failed to save RSVP' });
			}
		} catch (error) {
			console.error('Error sending RSVP:', error);
			return fail(500, { error: 'Failed to save RSVP' });
		}
	}
} satisfies Actions;
