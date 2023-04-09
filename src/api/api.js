import axios from 'axios';

export class Api {
    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:8080/api',
            validateStatus: () => true,
        });
    }

    async loginByPassword(usernameOrEmail, password) {
        const res = await this.client.post('/auth/signin', {usernameOrEmail, password});
        if (res.data.tokenType) {
            const {tokenType, accessToken} = res.data;
            this.client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;

            const user = await this.me();
            return {
                success: true,
                token: {
                    tokenType,
                    accessToken,
                },
                user,
            };
        } else {
            const {error, message} = res.data;
            return {
                success: false,
                error: {
                    code: error,
                    message: message,
                },
            };
        }
    }

    async logout() {
        return;
    }

    async me() {
        const res = await this.client.get('/users/me');
        return res.data;
    }

    async getCards(username = null) {
        const res = await this.client.get(username ? `/users/${username}/cards` : '/cards');
        return res.data;
    }

    async getExchanges(cardId = null) {
        const res = await this.client.get(cardId ? `/cards/${cardId}/exchanges` : '/cards');
        return res.data;
    }
}
