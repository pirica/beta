class Client {
    constructor() {
        this.url = 'http://api.blobry.com';
    }

    async getUser() {
        return (await this.sendRequest('user')).json();
    }

    async sendRequest(path, options) {
        return await fetch(`${this.url}/${path}`, {
            ...options,
            credentials: 'include',
            headers: {
                ...options ? options.headers ? options.headers : {} : {}
            },
        });
    }
}

$(document).ready(async () => {
    console.log(await (new Client()).getUser())
});