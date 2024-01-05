var url = $request.url
var obj = JSON.parse($response.body);
obj.isManager = "1";
obj.isDesigner = "1";
obj.designerInfo[0].isOfficial=true;
obj.designerInfo[0].memberFlag="1";
$done({ body: JSON.stringify(obj) });
