import * as types from '../constant/actiontype';
import * as articleData from '../mock/article';


export default function article(state = [], action = {}) {
  const {
        type, payload
  } = action;

  let successData, failureData;

  switch (type) {

        // ==============================================
        // 列表
        // ==============================================
        case types.FETCH_ARTICLES:

            return {
                ...state,
                ...payload
            };
        case types.FETCH_ARTICLES_SUCCESS:
            successData = {
                status : 1,
                message : "加载成功",
                results : articleData.items //payload.results
            };

            return {
                ...state,
                ...successData
            };
        case types.FETCH_ARTICLES_FAILURE:
            failureData = {
                status : -1,
                message : "加载失败",
                results : []
            };

            return {
                ...state,
                ...failureData
            };  
        

         // ==============================================
        // 详情
        // ==============================================
        case types.FETCH_ARTICLE:

            return {
                ...state,
                ...payload
            };
        case types.FETCH_ARTICLE_SUCCESS:
            successData = {
                status : 1,
                message : "加载成功",
                results : articleData.items //payload.results
            };

            return {
                ...state,
                ...successData
            };
        case types.FETCH_ARTICLE_FAILURE:
            failureData = {
                status : -1,
                message : "加载失败",
                results : []
            };

            return {
                ...state,
                ...failureData
            };    

        default:
            return state;
    }
}
