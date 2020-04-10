import requests from 'requests';

class Corona {
    public data: string
    constructor(data:string) {
        this.data = data;
    }

    public output() {

    }

    public do(url: string) {
        requests(url, (error, resp, body) => {
            this.data = body;
        })
    }

    public timeSeries() {
        console.log(this.data);
    }
}