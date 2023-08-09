Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    getUserInfo() 
  },
  onShow() {
    // 页面显示
    console.log('显示了');
  },
  onHide() {
    // 页面隐藏
    console.log('隐藏了');
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
    console.log('标题被点击');
  },
  onPullDownRefresh() {
    // 页面被下拉
    console.log('页面被下拉');
  },
  onReachBottom() {
    // 页面被拉到底部
    console.log('页面被拉到底部');
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '返回',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  goToHome() {

  }
});
