fetch('https://whhm.szjhwjcg.cn/szrmb-red-envelope/szrmb/H5', {
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
    cookie:
      'acw_tc=b706e79c16539716450075478e63892a383ad9cd954548a76e377cbde0; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221811864751f82d-0dc79a4d65a09f8-34736704-1296000-18118647520bd0%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgxMTg2NDc1MWY4MmQtMGRjNzlhNGQ2NWEwOWY4LTM0NzM2NzA0LTEyOTYwMDAtMTgxMTg2NDc1MjBiZDAifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%221811864751f82d-0dc79a4d65a09f8-34736704-1296000-18118647520bd0%22%7D',
    Referer: 'https://whhm.szjhwjcg.cn/szrmbH5/index.html?actNumber=06oVxbD&channelId=',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  body: '{"Head":{"TxCode":"F001","ApiCode":"SZRMB005","SignData":"","SecNo":"8","TraceNo":"HZKYV21020110095785843617450546847153134000","OrgNo":"105584042000006"},"Req":{"TxCode":"F001","ApiCode":"SZRMB005","TxDate":"20210322","TxTime":"185507","TraceNo":"HZKYV210201100957858436","OrgNo":"105584042000006","data":""}}',
  method: 'POST',
})
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
