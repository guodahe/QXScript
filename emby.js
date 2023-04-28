/**
 * http://www.emby.shop/newsystem/index.jsp 无需登录
 */
var obj = JSON.parse($response.body);
console.log(obj)
$notify("emby", "获取账号密码", obj.extend.orderinfo.transNo)
$done();