import CLIENT from './client';

interface LoginInfo {
	error?: string;
	token: string;
	team_id: string;
}

export default async function Login(googleIdToken: string, name: string) {
	const formData = new FormData();
	formData.append('id_token', googleIdToken);
	formData.append('name', name);
	const res = await CLIENT.post('/api/v1/login', formData)
	const status = res.status
	const data = res.data as LoginInfo
	if (status !== 200) data.error = "Please login again."
	return data as LoginInfo;
}
