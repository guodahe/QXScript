/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

 var url = $request.url;
url = url.replace(/udid=(.*)/,'udid=c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');
console.log(url);
$done({url});
