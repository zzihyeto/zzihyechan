import type { Actions } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

const resend = new Resend(env.RESEND_API_KEY);

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname');
		console.log('rsvp() - name', name);

		const { data, error } = await resend.emails.send({
			from: env.FROM_EMAIL,
			to: env.TO_EMAIL,
			subject: `[Wedding Invitation] RSVP - ${name}`,
			text: `YES`
		});

		console.log('send() - respond', data, error);
		if (error) {
			return { success: false };
		}

		return { success: true };
	}
} satisfies Actions;
