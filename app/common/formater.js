import * as util from '../common/util';

/*
  消息项格式化
====================================================*/
export function messageItemFormater(messageItem){
  if (messageItem) {
    let { content, createtime, stockcode } = messageItem;
    if (content) {
      if (stockcode !== "") {
        if (stockcode.indexOf("6") === 0) {
          messageItem.stockarea = "SH";
        } else {
          messageItem.stockarea = "SZ";
        }
      }
      messageItem.content = content.replace(/\\n/g, "<br/>");
    }
    if (createtime) {
      messageItem.createtime = util.DateFormater(createtime, "yyyy年MM月dd日 hh:mm");
    }
  }
  return messageItem;
}

/*
  消息列表格式化
====================================================*/
export function messageListFormater(messageList){
  let results = [];
  if (messageList && messageList.length) {
    for (let i = 0, len = messageList.length; i < len; i++) {
      let messageItem = messageList[i],
          formatMessage = messageItemFormater(messageItem);
      if (formatMessage) {
        results.push(formatMessage);
      }
    }
  }
  return results;
}
