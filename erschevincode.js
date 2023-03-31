var obj = JSON.parse($response.body);


let linkurl = unescape(obj.result.vb.linkurl);
console.log(linkurl);
let index= linkurl.indexOf('vincode=')+8;
console.log(index);
let vincode =linkurl.substr(index,17);
$notify("二手车之家","获取车架号vincode","vincode:"+vincode);
