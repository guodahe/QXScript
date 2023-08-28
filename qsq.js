var url = $request.url;
console.log(JSON.stringify($request) );
function replaceParamVal(oUrl, paramName, replaceWith) {
    var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
};
let newUrl = replaceParamVal(url, 'udid', 'c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a');
$done({ url: newUrl });
