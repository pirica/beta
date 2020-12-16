class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.username;
        this.avatar = `https://cdn.discordapp.com/avatars/${this.id}/${user.avatar}.webp?size=128`;
        this.discriminator = user.discriminator;
        this.locale = user.locale;
    }
}

class Client {
    constructor() {
        this.url = 'http://api.blobry.com';
    }

    async getUser() {
        return new User((await this.sendRequest('user')).json());
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