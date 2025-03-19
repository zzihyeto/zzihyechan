import type { Actions } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

const resend = new Resend(env.RESEND_API_KEY);

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('fullname')?.toString().trim();
		console.log('rsvp() - name', name);

		if (!name) {
			return fail(400, { nameValidationError: true });
		}

		const { data, error } = await resend.emails.send({
			from: env.FROM_EMAIL,
			to: env.TO_EMAIL,
			subject: `[Wedding Invitation] RSVP - ${name}`,
			text: `YES`
		});

		console.log('send() - respond', data, error);
		if (error) {
			return fail(400, { name, emailError: true });
		}

		return { success: true };
	}
} satisfies Actions;
