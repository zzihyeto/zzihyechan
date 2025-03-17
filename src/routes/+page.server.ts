import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export const actions = {
	rsvp: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('fullname');
		console.log('rsvp() - name', name);

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: env.EMAIL_USER,
				pass: env.EMAIL_PASS
			}
		});

		await transporter.sendMail({
			from: env.EMAIL_USER,
			to: env.EMAIL_TO_USER,
			subject: '[Wedding Invitation] RSVP Submission',
			text: `Name: ${name}\n`
		});

		return { success: true };
	}
} satisfies Actions;
