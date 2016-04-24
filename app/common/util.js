import './RSA';

/*
  RSA加密
====================================================*/
export function RSAEncrypt(str) {
    var modulus = '008448aca526848817007c38167fc815ee7deb226a7b4664477caa30ab381b5c3566171b03218fec8e4999b01b81815e4a6a681c2d9d89504bc6bd3acd34c06c236a94d17335621ac58d30d6a2f3cebc54feedfce7dd0e3da83f72c6308a6b5e35a6e14e183356c011a4bc67426166bee991407de5aa627163ae11fcb6068bfa0b';
    var exponent = '010001';
    var key = RSAUtils.getKeyPair(exponent, '', modulus);
    str = RSAUtils.encryptedString(key, str);
    return str;
}

/*
  获取设备类型
====================================================*/
export function getDeviceType(){
    let iosTag = "Mac OS X",
        androidTag = "Android";

    let userAgent = navigator.userAgent;

    let isIOS = userAgent.indexOf(iosTag)>0,
        isAndroid = userAgent.indexOf(androidTag)>0,
        isWeb = false;
    if (!isIOS && !isAndroid) {
        isWeb = true;
    }
            
    return { isIOS, isAndroid, isWeb };
}

/*
  获取股票所属区域
====================================================*/
export function getStockArea(stockcode){
    let stockarea = "";
    if (stockcode) {
        if (stockcode.indexOf("6") === 0) {
            stockarea = "SH";
        }else{
            stockarea = "SZ";
        }
    }
    return stockarea;
}

/*
  时间格式化
====================================================*/
export function DateFormater(date, fmt = 'yyyy-mm-dd HH:mm:ss'){

    var formatDate = date;
    if(typeof date === "undefined"){
        formatDate = new Date();
    }

    if(typeof date === "string"){
        formatDate = new Date();
        formatDate.setTime(Date.parse(date));
    }

    var o = {
        "M+": formatDate.getMonth() + 1, //月份
        "d+": formatDate.getDate(), //日
        "h+": formatDate.getHours(), //小时
        "m+": formatDate.getMinutes(), //分
        "s+": formatDate.getSeconds(), //秒
        "q+": Math.floor((formatDate.getMonth() + 3) / 3), //季度
        "S": formatDate.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (formatDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

String.format = function () {
    var args = arguments;
    return args[0].replace(/\{(\d+)\}/g, function (m, i) { return args[i * 1 + 1]; });
};
