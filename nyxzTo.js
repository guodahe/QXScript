var content = $response.body;
var data = new Blob([content],{type:"text/html"});
var downloadUrl = window.URL.createObjectURL(data);
var anchor = document.createElement("a");
anchor.href = downloadUrl;
anchor.click();
$done();