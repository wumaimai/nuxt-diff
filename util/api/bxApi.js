import proxy from '../proxy';

const apiUrl = "http://127.0.0.1:3000";
const webUrl = "http://127.0.0.1:3000";

const api = {
    getBxList: function(params={}){
        let option = {
            url: `${apiUrl}/api/bx/list`,
            params,
            method: 'post'
        };
        return proxy(option);
    }
}

export default api;