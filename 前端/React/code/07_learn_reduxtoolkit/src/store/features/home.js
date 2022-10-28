import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homeMultidata',
  async (extarInfo, store) => {
    console.log(extarInfo, store)
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    const data = res.data.data
    const banners = data.banner.list
    const recommends = data.recommend.list

    // 可以在此dispatch
    // store.dispatch(changeBanners(banners))
    // store.dispatch(changeRecommends(recommends))

    // 也可以将结果return出去, 在extraReducers里处理
    return {
      banners,
      recommends
    }
  }
)

const home = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  extraReducers: {
    [fetchHomeMultidataAction.pending](state, action) {
      console.log('fetchHomeMultidataAction pending')
    },
    [fetchHomeMultidataAction.fulfilled](state, { payload }) {
      console.log('fetchHomeMultidataAction fulfilled', payload)
      state.banners = payload.banners
      state.recommends = payload.recommends
    },
    [fetchHomeMultidataAction.rejected]() {
      console.log('fetchHomeMultidataAction rejected')
    }
  }
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchHomeMultidataAction.pending, (state, action) => {
  //       console.log('fetchHomeMultidataAction pending')
  //     })
  //     .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
  //       console.log('fetchHomeMultidataAction fulfilled', payload)
  //       state.banners = payload.banners
  //       state.recommends = payload.recommends
  //     })
  //     .addCase(fetchHomeMultidataAction.rejected, () => {
  //       console.log('fetchHomeMultidataAction rejected')
  //     })
  // }
})

export const { changeBanners, changeRecommends } = home.actions

export default home.reducer
