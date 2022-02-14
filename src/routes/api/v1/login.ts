import axios from 'axios';

// @ts-expect-error Binding element 'request' implicitly has an 'any' type.
export async function post({ request }) {
	// const formData = new FormData();
	// formData.append('id_token', request.body.get('id_token'));
	const form = await request.formData();
	const formUrlEncoded = (x: { [key: string]: string }) =>
		Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');
	return {
		body: (
			await axios.post(
				'http://localhost:8000/api/v1/login',
				formUrlEncoded({
					id_token: form.get('id_token')
				})
			)
		).data
	};
}
