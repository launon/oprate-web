import axios from 'axios';

// const service = axios.create({
//     baseURL: 'https://img.xjh.me/random_img.php',
//     timeout: 5000
// });

// export const getRequest = (url, params) => {
//     return service.get(url, { params });
// };

// export const postRequest = (url, data) => {
//     return service.post(url, data);
// };

/**
 * 统一处理成功响应
 * @param {Object} res - axios 响应对象
 * @returns {any} 处理后的数据
 */
function success(res) {
    // 这里可以根据后端接口规范自定义处理
    if (res && res.data) {
        return res.data; // 返回后端数据
    } else {
        // 业务失败也可以抛出错误
        throw new Error(res.data ? res.data.message : '未知错误');
    }
}

/**
 * 统一处理错误响应
 * @param {Object} err - axios 错误对象
 * @returns {Promise<never>} 抛出错误
 */
function error(err) {
    // 可以根据 err.response.status 做更细致的处理
    // 这里直接抛出错误信息
    if (err.response && err.response.data && err.response.data.message) {
        throw new Error(err.response.data.message);
    } else {
        throw new Error(err.message || '网络错误');
    }
}

async function getRequest(url, params = {}) {
    return axios.get('/random-img' + url, { params }).then(
        res => success(res)
    ).catch(
        res => error(res)
    );
}

async function postRequest(url, data) {
    return await axios.post(url, data);
}

export default { getRequest, postRequest, success, error };