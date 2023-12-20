import ApiService from "./services/api.srvs";

class Background {

    constructor() {
		ApiService.getInstance();
        this.main();
    }

    async main(): Promise<void> {

    }
}

new Background();
