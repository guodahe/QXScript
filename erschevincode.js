var obj = JSON.parse($response.body);


let linkurl = decodeURI(obj.result.vb.linkurl);
let index= linkurl.indexOf('vincode=')+8;
let vincode =linkurl.substr(index,17);
$notify("二手车之家","获取车架号vincode","vincode:"+vincode);
