import HomePageData from './home.json'

var sliderImages = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var coverImages = require.context('./covers', false, /\.(png|jpg|gig|svg)$/)

HomePageData.top.forEach((x) => {
  x.imgUrl = sliderImages('./' + x.imgUrl)
})

HomePageData.promotions.forEach((x) => {
  x.imgUrl = coverImages('./' + x.imgUrl)
})

export default {
  getHomeData () {
    return HomePageData
  }
}
