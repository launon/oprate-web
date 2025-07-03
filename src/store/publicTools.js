import http from './api/http'

export default {
    // topImage(params) {
    //     // const Http = new XMLHttpRequest();
    //     // const url = `https://jsonplaceholder.typicode.com/posts?ctype=${params.ctype ? params.ctype : ''}&type=${params.type ? params.type : ''}`;
    //     // const url = `https://jsonplaceholder.typicode.com/posts`;
    //     // Http.open("GET", url);
    //     // Http.send();
    //     // Http.onreadystatechange = (e) => {
    //         //     console.log(Http.responseText)
    //         // };

    //     let response = axios.get(`https://jsonplaceholder.typicode.com/posts?return=json&ctype=${params.ctype ? params.ctype : ''}&type=${params.type ? params.type : ''}`);
    //     return response;
    // },

    topImage(params){
        let url = 'https://jsonplaceholder.typicode.com/posts';
        return http.getRequest(url, params);
    }
}