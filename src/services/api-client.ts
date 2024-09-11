import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '7b4920e0012048f4a1f49b13b32bc118',
	},
});