App({
  // 声明全局数据
  todos:[
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 商家应用', completed: false }
  ],
  userInfo: null,
 // 声明全局方法
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
      // 调用用户授权 API
      my.authorize({
        scopes:'scope.userInfo',
        success: authcode => {
          console.info(authcode);
        // 调用获取用户信息 API
          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
       },
       fail: () => {
         reject({});
       },
     });
   });
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
