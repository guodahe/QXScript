var url = $request.url;
console.log("替换前"+url);
function replaceParamVal(oUrl, paramName, replaceWith) {
    var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
};
let newUrl = replaceParamVal(url, 'udid', 'c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');
console.log("替换后"+newUrl);
$done({ url: newUrl });
