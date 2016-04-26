import * as types from '../constant/actiontype';
import * as recommendData from '../mock/recommend';


export default function recommend(state = [], action = {}) {
  const {
        type, payload
  } = action;

  let successData, failureData;

  switch (type) {

        // ==============================================
        // 列表
        // ==============================================
        case types.FETCH_RECOMMENDS:

            return {
                ...state,
                ...payload
            };
        case types.FETCH_RECOMMENDS_SUCCESS:
            successData = {
                status : 1,
                message : "加载成功",
                results : recommendData.items //payload.results
            };

            return {
                ...state,
                ...successData
            };
        case types.FETCH_RECOMMENDS_FAILURE:
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
