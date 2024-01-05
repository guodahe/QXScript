var url = $request.url
var obj = JSON.parse($response.body);
obj.isManager = "1";
obj.isDesigner = "1";

$done({ body: JSON.stringify(obj) });