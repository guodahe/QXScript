/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

 var req = {};
req.url = $request.url.replace(/udid=(.*)/,'udid=c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');
req.headers = $request.headers;
req.method = $request.method;
req.path = $request.path.replace(/udid=(.*)/,'udid=c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');
console.log(JSON.stringify(req));
$done(req);
