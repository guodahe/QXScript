var responseBody = $response.body;
console.log(responseBody);
let result = responseBody.replace("00008110-000A40611A61401E", "c17440a56c5ef43b4e9381ffd60eb7cd7efdf61a");
$done({body:result})