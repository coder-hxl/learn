import * as actionTypes from './constants'
import axios from 'axios'

export function changeBannersAction(banners) {
  return { type: actionTypes.CHANGE_BANNERS, banners }
}

export function changeRecommendsAction(recommends) {
  return { type: actionTypes.CHANGE_RECOMMENDS, recommends }
}

export function fetchHomeMultidataAction() {
  return (dispatch) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const data = res.data.data
      const banners = data.banner.list
      const recommends = data.recommend.list

      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}
