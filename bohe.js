var obj = JSON.parse($response.body);
console.log(obj);
//obj.vip.state="1"   
//obj.vip.integral_member.integral=9999
//obj.vip.integral_member.level=9999
//obj.vip.is_member=true
//obj.vip.started_at="2023-03-20"
//obj.vip.started_at="2099-12-12"
//obj.user.role=1
//obj.user.user_type=1
obj.data.vip.is_member=true;
obj.data.user.user_name="测试Qqq";
$done({body:JSON.stringify(obj)});
