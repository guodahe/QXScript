[rewrite_local]

^http:\/\/api\.duitang\.com\/napi\/people\/me url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/duitang.js

[mitm] 

hostname = api.duitang.com


var obj = JSON.parse($response.body);
obj.data.vip = true;
$done({body:JSON.stringify(obj)});