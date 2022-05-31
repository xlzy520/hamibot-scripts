const axios = require('axios');

axios({
  url: 'https://whhm.szjhwjcg.cn/szrmb-red-envelope/szrmb/H5',
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    accesstoken: '618efdcb60d84ba8b8b794a6aca08f88&06oVxbD',
    'content-type': 'application/json',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
  },
  referrer: 'https://whhm.szjhwjcg.cn/szrmbH5/index.html?actNumber=06oVxbD&channelId=',
  referrerPolicy: 'strict-origin-when-cross-origin',
  data: '{"Head":{"TxCode":"F001","ApiCode":"SZRMB005","SignData":"","SecNo":"8","TraceNo":"HZKYV21020110095785843617450546847153134000","OrgNo":"105584042000006"},"Req":{"TxCode":"F001","ApiCode":"SZRMB005","TxDate":"20210322","TxTime":"185507","TraceNo":"HZKYV210201100957858436","OrgNo":"105584042000006","data":""}}',
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
}).then((res) => {
  console.log(res.data);
});
