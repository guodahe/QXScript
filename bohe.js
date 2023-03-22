var body = $response.body;
var obj = JSON.parse(body);
//obj.vip.state="1"   
//obj.vip.integral_member.integral=9999
//obj.vip.integral_member.level=9999
//obj.vip.is_member=true
//obj.vip.started_at="2023-03-20"
//obj.vip.started_at="2099-12-12"
//obj.user.role=1
//obj.user.user_type=1
obj.user.user_name="测试"
body = JSON.stringify(obj);
$done({body});