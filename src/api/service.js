import axios from 'axios';
import { notification } from 'ant-design-vue';

const foodstp = "https://makeabi.lycent.cn/";
const localhost = "http://192.168.10.187/";

const hearder = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
}
async function Fetch(url, method, body) {
    return await axios({
        method: method,
        url: url,
        baseURL: foodstp,
        data: body,
        headers: hearder
    }).then(function (response) {
        console.log("response:", response);
        if (response.status >= 200 || response.status <= 304) {
            return response.data;
        } else {
            notification.warning({
                message: response.message || response.msg,
                description: response.statusText,
            })
        }
    }).catch(function (error) {
        console.error("error:", error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            notification.error({
                message: error.message,
                description: error.response.statusText,
            })
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            notification.error({
                message: "已发出请求，未收到答复！",
                description: error.request.statusText,
            })
        } else {
            // Something happened in setting up the request that triggered an Error
            notification.error({
                message: error.message,
                description: error.stack,
            })
        }
        return { status: 500 };
    });

}

export { hearder, Fetch }