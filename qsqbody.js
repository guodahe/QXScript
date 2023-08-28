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

 const body = ``;
 
 const myRequest = {
     url: newUrl,
     method: $request.method,
     headers: $request.headers,
     body: body
 };
 
 $task.fetch(myRequest).then(response => {
     $done(response.body);
 }, reason => {
     console.log(reason.error);
     $done();
 });
