auto.waitFor();
while (true) {
  if (text('点击跳转详情').findOne(800) != null) {
    // alert("检测到点击跳转详情")
    click(100, 100);
  }

  if (id('ad_insert_tv_action').findOne(300) != null) {
    // alert("检测到下载")
    id('ad_insert_iv_close').findOne(800).click();
  }

  const pkg = packageName('com.sinyee.babybus.recommendapp').findOne();

  // alert(pkg)

  const adBanner = id('ad_banner').findOne(300);
  if (adBanner != null) {
    alert('检测到 banner');
    click(1232, 0, 1280, 48);
  }

  var ad = id('com.sinyee.babybus.recommendapp:id/closelv').findOne(100);
  if (ad != null) {
    alert('检测到广告');
    ad.click();
  }

  if (text('跳过').findOne(300) != null) {
    // alert("检测到跳过")
    text('跳过').findOne(300).click();
  }
  if (text('马上玩').findOne(300) != null) {
    console.log('检测到广告');
    // alert("检测到广告")
    if (text('退出').findOne(300) != null) {
      // alert("检测到退出")
    }
  }

  sleep(1500);
}
