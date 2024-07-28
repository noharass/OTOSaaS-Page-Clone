$(function() {

  var currentImg = 'none' // none big small

  // 准备数据
  var banners = [
    {
      id: 0,
      bigUrl: './img/banner0.png',
      smUrl: './img/banner0_sm.png'
    },
    {
      id: 1,
      bigUrl: './img/banner1.png',
      smUrl: './img/banner1_sm.png'
    },
    {
      id: 2,
      bigUrl: './img/banner2.png',
      smUrl: './img/banner2_sm.png'
    },
  ]

  $(window).on('resize', throttle(function () {
    // console.log($(this).outerWidth())
    var winWidth = $(this).outerWidth()
    var isBigScreen = winWidth >= 768

    // if (currentImg === 'big' && isBigScreen) {
    //   return
    // }
    // if (currentImg === 'small' && !isBigScreen) {
    //   return
    // }

    if (currentImg === 'none') {
      renderBanner(banners, isBigScreen)
    }

    if (currentImg === 'big' && !isBigScreen) {
      renderBanner(banners, isBigScreen)
    }
    if (currentImg === 'small' && isBigScreen) {
      renderBanner(banners, isBigScreen)
    }


  }))

  $(window).trigger('resize')


  function renderBanner(banners = [], isBigScreen) {
    currentImg = isBigScreen ? 'big' : 'small'

    // 停止定时器
    $('.carousel').carousel('dispose')

    // 将数据渲染到页面上
    var bannerHtmlString = ''
    banners.forEach(function (item, index) {
      var active = index === 0 ? 'active' : ''
      var imgUrl = isBigScreen ? item.bigUrl : item.smUrl
      bannerHtmlString += `
    <div class="carousel-item ${active}" data-interval="2000">
      <img src="${imgUrl}" class="d-block w-100" alt="...">
    </div>
    `
    })
    $('.carousel-inner').empty().append(bannerHtmlString)

    // 自动轮播
    $('.carousel').carousel('cycle')
  }

})