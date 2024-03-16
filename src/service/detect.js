import {request} from "@/service/utils";

export  default  {

    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.content
     *
     * @returns {Promise}
     */
    detect(params = {}) {
        return request('post', 'detect', params).then((response) => {
            return response;
        })
    },

}