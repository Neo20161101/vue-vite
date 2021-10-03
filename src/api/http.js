import { Fetch, hearder } from "./service";
import store from "../AppStore";

const setHearder = () => {
    console.log(store)
    // const { ApiKey } = store;
    // if (ApiKey) {
    //     hearder.ApiKey = ApiKey;
    // } else {
    //     // 防刷新处理
    //     hearder.ApiKey = sessionStorage.getItem("ApiKey");
    // }
}


class Http {
    // 测试
    fetchLogin = (body) => {
        setHearder();
        return Fetch("/login", "post", body);
    }
}

export default new Http()