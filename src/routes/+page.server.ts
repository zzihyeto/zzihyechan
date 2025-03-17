import type { Actions } from './$types';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS, EMAIL_TO_USER } from '$env/static/private';

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
				user: EMAIL_USER,
				pass: EMAIL_PASS
			}
		});

		await transporter.sendMail({
			from: EMAIL_USER,
			to: EMAIL_TO_USER,
			subject: '[Wedding Invitation] RSVP Submission',
			text: `Name: ${name}\n`
		});

		return { success: true };
	}
} satisfies Actions;
