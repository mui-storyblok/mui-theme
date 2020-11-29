import axios from 'axios'

const apiUrl = process.env.API_URL || 'http://18.237.63.246/api/v1/'

export default {
	async addTheme(name, JSONTheme) {
		const url = `${apiUrl}theme`;
		const body = { JSONTheme, Name: name };
		const { data } = await axios({ method: 'post', url, data: body });

		return data;
	},

	async loadThemes() {
		const url = `${apiUrl}themes`;
		const { data } = await axios({ method: 'get', url });

		return data;
	}
}