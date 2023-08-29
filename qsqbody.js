/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

 var url = $request.url;
console.log("进来了------------------------------------------------------------------------------")

 function replaceParamVal(oUrl, paramName, replaceWith) {
     var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi');
     var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
     return nUrl;
 };
 let newUrl = replaceParamVal(url, 'udid', 'c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');

 const method = `GET`;

 const body = ``;
 
 const myRequest = {
     url: 'http://mothipa.webdyc.com/appstore?udid=c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a',
     method: $request.method,
     //headers: $request.headers,
     body: body
 };
 
 $task.fetch(myRequest).then(response => {
     $notify("成功","1111",response.body);
     $done("'"+response.body+"'");
 }, reason => {
     $notify("失败","1111",newUrl);
     console.log(reason.error);
     $done();
 });
