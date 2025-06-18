// didi_swl.js

let body = $response.body;
let obj = JSON.parse(body);

// 当前时间戳 + 300秒（5分钟）
const now = Math.floor(Date.now() / 1000);
const startTime = now + 300;

// 顺路目的地配置：兰州中川国际机场
const targetDest = {
  dest_name: "兰州中川国际机场T3航站楼",
  dest_address: "皋兰县永登县中川镇",
  dest_lng: "103.636757",
  dest_lat: "36.523133",
  dest_type: 0,
  dest_start_time: startTime
};

// 设置 dependent_modules 中顺路目的地
if (obj?.data?.dependent_modules) {
  obj.data.dependent_modules.order_dest = targetDest;
  obj.data.dependent_modules.has_dest_region = 0;
  obj.data.dependent_modules.listen_order_mode = 3;
}

// 设置 set_items 中顺路配置
for (const section of obj.data.set_items) {
  if (section.key === "real") {
    for (const item of section.items) {
      if (item.key === "real_dest") {
        const comp = item.components?.[0];
        if (comp?.value) {
          let val = JSON.parse(comp.value);
          val.ride_start_time.value = startTime;
          val.addr_info.value = targetDest;
          val.is_direct = [
            {
              title: "一般顺路",
              desc: "多单靠近目的地，订单多",
              value: 0,
              selected: 1
            },
            {
              title: "超级顺路",
              desc: "一单到达目的地附近，比一般顺路订单少",
              value: 1,
              selected: 0
            }
          ];
          comp.value = JSON.stringify(val);
        }
      }
    }
  }
}

$done({ body: JSON.stringify(obj) });
