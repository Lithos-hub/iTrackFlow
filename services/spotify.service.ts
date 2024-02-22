import API from '@/services/service-layer.service';

export const getSpotifySession = async () => {
	// curl -X POST "https://accounts.spotify.com/api/token" \
	//  -H "Content-Type: application/x-www-form-urlencoded" \
	//  -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"

	const runtimeConfig = useRuntimeConfig();

	const data = {
		grant_type: 'client_credentials',
		client_id: runtimeConfig.public.SPOTIFY_CLIENT_ID,
		client_secret: runtimeConfig.public.SPOTIFY_CLIENT_SECRET,
	};

	try {
		const response = await API.post('https://accounts.spotify.com/api/token', data, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		localStorage.setItem('spotifyToken', response.data.access_token);
	} catch (error) {
		return error;
	}
};

export const getSpotifyByQuery = async (query: string) => {
	try {
		const { data } = await API.get(
			`
        https://api.spotify.com/v1/search?q=${query}&type=track,album,artist`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('spotifyToken')}`,
				},
			},
		);
		return data;
	} catch (error) {
		return error;
	}
};
