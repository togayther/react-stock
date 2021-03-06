import * as types from './../constant/actiontype';

export function fetchArticles() {
  return  (dispatch, getState) => {
    let { status = 0, message = '加载中', loader = true } = {};

    dispatch({
      type: [types.FETCH_ARTICLES, types.FETCH_ARTICLES_SUCCESS, types.FETCH_ARTICLES_FAILURE],
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