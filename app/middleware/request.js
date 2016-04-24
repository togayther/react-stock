import * as apis from '../config/api';
import { defaultParams as defaultFetchParams } from '../common/fetch';

import 'whatwg-fetch';

export default function request({ dispatch }) {
  return (next) =>  (action) => {
    const { type, payload = null, meta = {} } = action;

    if (!type || type.constructor !== Array) return next(action);

    const [BEGIN, SUCCESS, FAILURE] = action.type;
    let [url, fetchParams] = meta.fetch;

    dispatch({
      type: BEGIN,
      payload: payload
    });

    fetchParams = {
      ...defaultFetchParams,
      ...fetchParams
    };

    if (url.match(/^http/) === null) url = `${apis.api}${url}`;


    //mock begin
    dispatch({
      type: SUCCESS,
      error: false,
      payload: {
        message:"",
        status:1
      }
    });

    return;

    //mock end

    fetch(url, fetchParams).then(function(res){
        if (res.ok) {
            res.json().then(function(json) {
                let dispatchType = (json.rscode === "0") ? SUCCESS : FAILURE;
                dispatch({
                    type: dispatchType,
                    payload: fetchParams.method === 'delete' ? payload : json
                });
            });
        }
        else {
          dispatch({
            type: FAILURE,
            error: true,
            payload: fetchParams.method === 'delete' ? payload : {
              message:"服务执行失败",
              status:res.status
            }
          });
        }
    }).catch(function(err) {
        console.log('data fetch failed:', err);
    })
  };
}
