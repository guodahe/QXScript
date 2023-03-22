var url = $request.url
var obj = JSON.parse($response.body);
console.log(url);
console.log(JSON.stringify(obj));
if(/app-interface\/v1\/user\/index/.test(url)){
    obj.data.first =  obj.data.first.map(v=>{
        v.is_gray=true
        return v
    });
}else if(/api\/v1\/user\_profile\/detail/.test(url)){
    obj.user_profile.user_name = "大河破解";
}else if(/api\/v1\/users\/plugins/.test(url)){
    obj.integral_member.integral = 9999;
    obj.integral_member.level = 9999;
}else if(/app-interface\/v1\/user\/user_info/.test(url)){
    obj.data.vip.state="2"   
    obj.data.vip.started_at="2023-03-20";
    obj.data.vip.expired_at="2099-12-12";
    obj.data.user.role=2
    obj.data.user.user_type=9;
    obj.data.vip.is_member=true;
    obj.data.user.user_name="大河破解";
}

$done({body:JSON.stringify(obj)});
