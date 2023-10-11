var url = $request.url;
function replaceParamVal(oUrl, paramName, replaceWith) {
    var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
};
 url = replaceParamVal(url, 'begin_time', '1310369394000');
 url = replaceParamVal(url, 'end_time', '1436599794000');
 url = replaceParamVal(url, 'count', 50);
//  uin: 
// begin_time: 0
// end_time: 0
// getappnotification: 1
// getnotifi: 1
// has_get_key: 0
// offset: 0
// set: 0
// count: 10
// useutf8: 1
// outputhtmlfeed: 1
// grz: 0.5842140626898953
// scope: 1
// g_tk: 1356583491
// g_tk: 1356583491
$done({ url});
