/*
一言 解锁Vip
***************************
QuantumultX:

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan\/getvipproduct\?YanYan\=2\&v\=4\.13 url script-response-body yiyan.js

[mitm]
hostname = app.yiyan.art

**************************/

let obj = JSON.parse($response.body || '{}');

if (obj.u) {
	obj.u["viptype"] = 3;
}

if (obj.product) {
	obj.product["yearprice"] = 0;
}

$done({
	body: JSON.stringify(obj)
});
