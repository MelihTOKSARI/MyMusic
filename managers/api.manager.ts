import axios, { AxiosResponse } from "axios";

/**
 * Manages all basic request with given url. 
 * Behave likes super class to enable managing request for different urls.
 * 
 * NOTE: Currently, this class only provides GET request according to project needs. 
 */
class ApiManager {

    private baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    //#region Private Methods

    /**
     * Make a url with given path and query params
     * 
     * @param path Path of a url
     * @param queryParams Query parameters of a url if any exists
     * @returns Complete url as a string
     */
    private makeUrl(path?: string, queryParams?: Map<string, Object>): string {
        let url = this.baseUrl + (path ?? '');
        
        if(queryParams) {
            url = url.concat('?');
            queryParams?.forEach((value: Object, key: string) => {
                if(value) {
                    url = url.concat(key, '=', value.toString(), '&')
                }
            })

            url = url.slice(0, url.length - 1);
        }
        
        return url;
    }

    //#endregion

    //#region Public Methods

    /**
     * Make get request with base url, given path and given query params and return response of a request
     * 
     * @param path Path of a url for request
     * @param queryParams Query parameters of request
     * @returns Response of request if there is not any error
     */
    public async getRequest<T>(path?: string, queryParams?: Map<string, Object>): Promise<T | undefined> {
        const url = this.makeUrl(path, queryParams);

        try {
            const response: AxiosResponse<T, any> = await axios.get<T>(url);
            return response.data;
        } catch(error) {
            throw error;
        }
    }

    //#endregion
}

export default ApiManager;