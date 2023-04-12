let obj = {
  pro:1
}
var resp = JSON.parse($response);
$notify("返回数据了",resp);
console.log("返回数据了",resp);
$done({body:obj});


