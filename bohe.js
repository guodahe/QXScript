var obj = JSON.parse($response.body);
console.log(obj);
//obj.vip.state="1"   
obj.data.vip.remain_day=999;
obj.data.vip.integral_member.integral=9999;
obj.data.vip.integral_member.level=9999;
obj.data.vip.started_at="2023-03-20";
obj.data.vip.expired_at="2099-12-12";
//obj.user.role=1
obj.data.user.user_type=2;
obj.data.vip.is_member=true;
obj.data.user.user_name="大河破解";
$done({body:JSON.stringify(obj)});
