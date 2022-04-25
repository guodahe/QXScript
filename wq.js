/*
微群 解锁Vip，代理
***************************
QuantumultX:

[rewrite_local]
^http:\/\/pdqun\.fanlizhe\.top\/App\/getUserInfo url script-response-body https://raw.githubusercontent.com/guodahe/QXScript/main/wq.js

[mitm]
hostname = pdqun.fanlizhe.top

**************************/

let obj = JSON.parse($response.body || '{}');

if (obj.user) {
	obj.user["is_vip"] = 1;
    obj.user["is_agent"] = 1;
    obj.user["vip_expires_time"] = 4080785422;
    obj.user["agent_expires_time"] = 4080785422;
    obj.user["agent_level"] = 1;
    obj.user["wallet"] = 311624;
    obj.user["pay_count"] = 9999;
    obj.user. commission_ratio={
        "direct":0.5,
        "indirect":0.1
    }

 
}


$done({
	body: JSON.stringify(obj)
});
