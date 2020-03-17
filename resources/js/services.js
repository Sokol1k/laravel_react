import axios from "axios";
import config from "./config";

class Service {
    constructor() {
        if (!Service._instance) {
            let service = axios.create({
                baseURL: config.api
            });
            service.interceptors.response.use(
                this.handleSuccess,
                this.handleError
            );
            this.service = service;
            Service._instance = this;
        }
        return Service._instance;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        switch (error.response.status) {
            case 401:
            case 400:
            case 422:
                break;
            default:
                this.redirectTo(document, "/404");
                break;
        }
        return Promise.reject(error);
    }

    redirectTo(document, path) {
        document.location = path;
    }

    get(path, params) {
        return this.service.request({
            method: "GET",
            url: path,
            responseType: "json",
            params: params
        });
    }

    post(path, payload) {
        return this.service.request({
            method: "POST",
            url: path,
            responseType: "json",
            data: payload
        });
    }

    delete(path) {
        return this.service.delete(path);
    }
}

const instance = new Service();
Object.freeze(instance);

export default instance;
