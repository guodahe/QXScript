var url = $request.url
var obj = JSON.parse($response.body);
// console.log(url);
// console.log(JSON.stringify(obj));
if (/app-interface\/v1\/user\/index/.test(url)) {
    obj.data.first = obj.data.first.map(v => {
        v.is_gray = false
        v.track = {
            "type": "",
            "track_points": []
        }
        return v
    });
} else if (/api\/v1\/user\_profile\/detail/.test(url)) {
    obj.user_profile.user_name = "大河破解";
} else if (/api\/v1\/vip\_member/.test(url)) {
    console.log(url, obj)
    obj.vip_member = true;
    obj.expired_at = "2099-12-12";
    obj.remain_days = 9999;
} else if (/api\/v1\/users\/plugins/.test(url)) {
    obj.integral_member.integral = 9999;
    obj.integral_member.level = 9999;
} else if (/app-interface\/v1\/user\/user_info/.test(url)) {
    obj.data.vip.state = "2"
    obj.data.vip.started_at = "2023-03-20";
    obj.data.vip.expired_at = "2099-12-12";
    obj.data.user.role = 2
    obj.data.user.user_type = 9;
    obj.data.vip.is_member = true;
    obj.data.user.user_name = "大河破解";
} else if (/shop-interface\/v1\/member\/get\_vip\_subscribe\_info/.test(url)) {
    obj.data = {
        "state": "1",
        "vip_subscribe_info": {
            "id": 0,
            "vip_subscribe_no": "123456",
            "user_key": "123456",
            "user_name": "大河破解",
            "state": "1",
            "signing_time": "2023-03-20",
            "canceled_time": "2099-12-12",
            "renewal_count": 0,
            "source": "app",
            "charge_interval": "",
            "sku_id": 0
        },
        "show_type": 1
    }
} else if (/store\/pages\/nutrition\_course\_json/.test(url)) {
    obj.content = obj.content.map(v => {
        v.list = v.list.map(m => {
            m.vip = false
            return m
        })
        return v
    })
} else if (/app\-interface\/v1\/recipes\/index/.test(url)) {
    obj.data.recom_recipes = obj.data.recom_recipes.map(v => {
        v.for_vip = false
        return v
    })
}else if (/app\-interface\/v1\/vip\_activity\/weight\_recommend/.test(url)) {
    obj.data.is_vip = true
}


$done({ body: JSON.stringify(obj) });

