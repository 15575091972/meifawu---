// pages/barber_message/barber_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mybarbers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://h40421346u.wicp.vip:18232/getAllBarber',
      data:{

      },
      method:"GET",
      success:(res)=>{
          console.log(res.data.data)
          this.setData({
            mybarbers:res.data.data
          })
      }
    })
  },
  getDetail:function(event){
    var name =  event.currentTarget.dataset.name
    console.log("event")
    console.log(name)
    wx.navigateTo({
      url: '/pages/yuyue_function/barber_detail/barber_detail?barberId='+name,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  myclick_barber_detail: function (options) {
    wx.navigateTo({
      url: '../barber_detail/barber_detail'
    })
  }
})