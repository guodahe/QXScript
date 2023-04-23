var obj = JSON.parse($response.body);
obj.admob_esp_processor_term_accepted= true;
obj.auto_collect_location= false;
console.log(JSON.stringify(obj));
$done({body:JSON.stringify(obj)});
