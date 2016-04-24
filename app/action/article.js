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


export function fetchArticle(id){
  return  (dispatch) => {

    let { status = 0, message = '加载中', loader = false } = {};

    dispatch({
      type: [types.FETCH_ARTICLE, types.FETCH_ARTICLE_SUCCESS, types.FETCH_ARTICLE_FAILURE],
      payload:{
        status,
        loader,
        id: id,
        message
      },
      meta: {
        fetch: [`prod/subscribe`, {
            method: 'get'
          }
        ]
      }  
    });
  };
}