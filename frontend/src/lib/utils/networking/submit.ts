import type { Submission } from 'src/types';
import CLIENT from './client';

export default async function Submit(token: string, submission: Submission) {
	const formData = new FormData();
	formData.append('token', token);
	formData.append('problem', submission.problem);
	formData.append('language', submission.language);
	if (!submission.file && submission.submission)
		formData.append('submission', submission.submission);
	else if (submission.file) formData.append('file', submission.file);
	return (await CLIENT.post('/api/v1/submit', formData)).data;
}
