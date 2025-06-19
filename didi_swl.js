// didi_swl.js — 滴滴顺路自动配置（最终版）

let obj = JSON.parse($response.body);

// 当前时间戳（秒）
const now = Math.floor(Date.now() / 1000);
const startTime = now + 300; // 启动时间为当前时间 + 5分钟

// 目标目的地：兰州中川国际机场 T3
const targetDest = {
  dest_name: "兰州中川国际机场T3航站楼",
  dest_address: "皋兰县永登县中川镇",
  dest_lng: "103.636757",
  dest_lat: "36.523133",
  dest_type: 0,
  dest_start_time: startTime
};

// ✅ 修改 dependent_modules 中顺路配置
if (obj?.data?.dependent_modules) {
  obj.data.dependent_modules.order_dest = { ...targetDest };
  obj.data.dependent_modules.has_dest_region = 0;
  obj.data.dependent_modules.listen_order_mode = 3;
}

// ✅ 修改 set_items 中顺路配置
for (const section of obj.data.set_items || []) {
  if (section.key === "real") {
    for (const item of section.items || []) {
      if (item.key === "region_and_dest_order") {
        // ✅ 自动开启顺路 toggle
        if (item.head?.toggle) {
          item.head.toggle.select_flag = 1;
        }

        for (const comp of item.components || []) {
          if (comp.name === "real_dest" && comp.value) {
            try {
              let val = JSON.parse(comp.value);

              // 设置顺路启动时间和目的地
              if (val.ride_start_time) {
                val.ride_start_time.value = startTime;
                val.ride_start_time.title = `顺路功能将在${new Date(startTime * 1000).getHours()}:${String(new Date(startTime * 1000).getMinutes()).padStart(2, '0')}启动`;
              }

              if (val.addr_info) {
                val.addr_info.value = { ...targetDest };
                val.addr_info.right_text = "今日剩3次";
                val.addr_info.intercept = null; // ✅ 设置 intercept 为 null
              }

              // 设置顺路模式：一般顺路
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
            } catch (e) {
              console.log("🚫 顺路配置解析失败:", e);
            }
          }
        }
      }
    }
  }
}

// ✅ 修改 save_btn_order_desc_text 字段
if (obj?.data?.save_btn_order_desc_text) {
  obj.data.save_btn_order_desc_text.initial_setting_num = 1;

  let noBoundary = obj.data.save_btn_order_desc_text.type_no_order_boundary;
  if (Array.isArray(noBoundary) && noBoundary[1]) {
    noBoundary[1].replace_num = 1;
  }
}

$done({ body: JSON.stringify(obj) });
