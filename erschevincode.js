var obj = JSON.parse($response.body);
// 判断是否是重写
const isRequest = typeof $request != "undefined";
// 判断是否是Surge
const isSurge = typeof $httpClient != "undefined";
// 判断是否是QuanX
const isQuanX = typeof $task != "undefined";
// 判断是否是Loon
const isLoon = typeof $loon != "undefined";
// 判断是否是JSBox
const isJSBox = typeof $app != "undefined" && typeof $http != "undefined";
// 判断是否是Node环境
const isNode = typeof require == "function" && !isJSBox;

let linkurl = decodeURI(obj.result.vb.linkurl)
let index= linkurl.indexOf('vincode=')+8
let vincode =linkurl.substr(index,17)
notify("二手车之家","获取车架号vincode","vincode:"+vincode)

/**
 * 提示信息
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} message 提示信息
 * @param {*} rawopts 设置
 */
 const notify = (title, subtitle, message, rawopts) => {
    const Opts = (rawopts) => {
      //Modified from https://github.com/chavyleung/scripts/blob/master/Env.js
      if (!rawopts) return rawopts;
      switch (typeof rawopts) {
        case "string":
          return isLoon
            ? rawopts
            : isQuanX
            ? {
                "open-url": rawopts,
              }
            : isSurge
            ? {
                url: rawopts,
              }
            : undefined;
        case "object":
          if (isLoon) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts["open-url"];
            let mediaUrl = rawopts.mediaUrl || rawopts["media-url"];
            return {
              openUrl,
              mediaUrl,
            };
          } else if (isQuanX) {
            let openUrl = rawopts["open-url"] || rawopts.url || rawopts.openUrl;
            let mediaUrl = rawopts["media-url"] || rawopts.mediaUrl;
            return {
              "open-url": openUrl,
              "media-url": mediaUrl,
            };
          } else if (isSurge) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts["open-url"];
            return {
              url: openUrl,
            };
          }
          break;
        default:
          return undefined;
      }
    };
    console.log(`${ title }\n${ subtitle }\n${ message }`);
    if (isQuanX) $notify(title, subtitle, message, Opts(rawopts));
    if (isSurge) $notification.post(title, subtitle, message, Opts(rawopts));
    if (isJSBox) $push.schedule({
      title: title,
      body: subtitle ? subtitle + "\n" + message : message
    });
  };