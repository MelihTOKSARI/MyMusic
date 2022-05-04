import Constants from "../constants/Constants";
import ApiManager from "./api.manager";

class XITEApiManager extends ApiManager {
    
    constructor() {
        super(Constants.xiteApi.baseUrl);
    }

}

const XITEApi = new XITEApiManager();
export default XITEApi;