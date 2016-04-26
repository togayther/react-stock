import * as types from './../constant/actiontype';

export function fetchRecommends() {
  return  (dispatch, getState) => {
    
    let { status = 0, message = '加载中', loader = true } = {};

    dispatch({
      type: [types.FETCH_RECOMMENDS, types.FETCH_RECOMMENDS_SUCCESS, types.FETCH_RECOMMENDS_FAILURE],
      payload:{
        status,
        loader,
        message
      },
      meta: {
        fetch: [`prod`, {
            method: 'get'
          }
        ]
      }  
    });
  };
}
