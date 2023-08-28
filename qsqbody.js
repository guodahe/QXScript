/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

 var url = $request.url;
 function replaceParamVal(oUrl, paramName, replaceWith) {
     var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi');
     var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
     return nUrl;
 };
 let newUrl = replaceParamVal(url, 'udid', 'c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');

 const method = `GET`;
 const headers = {
 'Accept' : `*/*`,
 'Accept-Encoding' : `gzip, deflate`,
 'Connection' : `keep-alive`,
 'Content-Type' : `application/json`,
 'appstore' : `v2`,
 'Host' : `api.fanhangame.ltd`,
 'User-Agent' : `ESign/1 CFNetwork/1410.0.3 Darwin/22.6.0`,
 'Agent' : `ESign`,
 'version' : `4.8.2`,
 'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
 };
 const body = ``;
 
 const myRequest = {
     url: newUrl,
     method: method,
     headers: headers,
     body: body
 };
 
 $task.fetch(myRequest).then(response => {
    console.log("请求成功");
     $done({body:response.body});
   console.log("请求完成");
 }, reason => {
     console.log(reason.error);
     $done();
 });
