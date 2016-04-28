
/*
 壳子插件调用简单封装
 ======================================================== */
function callShellMethod(method, onSuccess, onError, params) {
    if (typeof cordova === 'undefined') {
        console.info("不支持cordova");
        return;
    }
    try {
        let trytime = 0;
        let timer = setInterval(function(){
            trytime ++;
            if (typeof cordova.exec === "function") {
                cordova.exec(function(data) {
                    if (onSuccess && typeof onSuccess === "function") {
                        onSuccess(data);
                    }
                }, function(data) {
                    if (onError && typeof onError === "function") {
                        onError(data);
                    }else{
                        console.info("组件调用错误");    
                    }
                }, method, method, [params]);

                clearInterval(timer);
            }
            if (trytime == 5) {
                clearInterval(timer);
            }
        },100);
    } catch (e) {
        console.info("组件调用失败");
    }
}

export {
    callShellMethod
};