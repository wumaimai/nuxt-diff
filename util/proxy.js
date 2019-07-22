import axios from 'axios'

const defaultOption = {
    data: {}, 
    method: 'Get',
    headers: {
        'Content-Type': "application/json"
    }
}

function request(option){
    return new Promise((resolve, reject)=>{
        axios(Object.assign({}, defaultOption, option)).then(res=>{
            if(res.status == 200 || res.status == 304)
            {
                resolve(res.data);
            }
        }).catch(err=>{
            reject(err);
        });
    });
};

export default request;