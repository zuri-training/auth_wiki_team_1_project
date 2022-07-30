import cookie from 'cookie'
import { API_URL } from '../../../config'

export default async (request, response) => {
    if (request.method === 'GET') {
        const cookies = cookie.parse(request.headers.cookie || '');
        const access = cookies.access || false;

        console.log(cookies)
        if (access === false) {
            return response.status(401).json({
                error: "User unauthorized to make this request",
            });
        }

        try {
            const apiResponse = await fetch(`${API_URL}/api/auth/user/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${access}`,
                },
            });

            const data = await apiResponse.json();

            if (apiResponse.ok) {
                return response.status(apiResponse.status).json({
                    user: data.user,
                });
            } else {
                return response.status(apiResponse.status).json({
                    error: "Something went wrong while fetching user data",
                });
            }
        } catch (error) {
            return response.status(500).json(error);
        }

    } else {
        response.setHeader('Allow', [ 'GET' ]);
        return response.status(405).json({ error: `Method ${request.method} not allowed` });
    }
};