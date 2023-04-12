var requestBody = JSON.stringify($request);
console.log(requestBody);
$notify("nyxz",'获取请求内容',requestBody);
$done()
