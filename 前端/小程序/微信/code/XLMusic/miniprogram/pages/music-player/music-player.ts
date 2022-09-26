import { throttle } from 'underscore'

import { getLyric, getSongDetail } from '../../services/music'
import { parseLyric } from '../../utils/transition'

const app = getApp()
const audioContext = wx.createInnerAudioContext()

Page({
  data: {
    contentHeight: app.globalData.contentHeight,
    pageTitles: ['歌曲', '歌词'],
    currentPage: 0,

    id: 0,
    songData: {},
    lyricInfo: [] as any[],
    currentLyricText: '',
    currentLyricIndex: -1,

    duration: 0,
    currentTime: 0,
    sliderValue: 0,

    isSlider: false,
    isPlay: true
  },

  onLoad(options: any) {
    // 1.获取传入的 id
    const id = options.id
    this.data.id = id

    // 2.根据 id 获取歌信息
    // 2.1. 获取歌曲信息
    this.fetchSongDetail()
    // 2.2. 获取详细歌词
    this.fetchLyric()

    // 3.播放歌曲
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    audioContext.autoplay = true

    // 4.监听歌曲播放
    const throttleUpdateprogress = throttle(this.updateProgress, 500, {
      leading: false,
      trailing: false
    })
    audioContext.onTimeUpdate(() => {
      if (!this.data.isSlider) {
        throttleUpdateprogress()

        let index = -1
        const lyricLength = this.data.lyricInfo.length
        for (let i = 0; i < lyricLength; i++) {
          if (this.data.lyricInfo[i].time >= this.data.currentTime) {
            index = i - 1

            break
          }
        }

        if (index === this.data.currentLyricIndex) return

        const currentLyricText = this.data.lyricInfo[index].text
        this.setData({
          currentLyricText,
          currentLyricIndex: index
        })
      }
    })

    audioContext.onWaiting(() => {
      audioContext.pause()
    })
    audioContext.onCanplay(() => {
      audioContext.play()
    })
  },

  async fetchSongDetail() {
    const res = await getSongDetail(this.data.id)
    this.setData({ songData: res.songs[0], duration: res.songs[0].dt })
  },

  async fetchLyric() {
    const res = await getLyric(this.data.id)
    const lyricInfo = parseLyric(res.lrc.lyric)
    this.setData({ lyricInfo })
  },

  // 事件监听
  onSwiperChange(event: any) {
    const current = event.detail.current
    this.setData({ currentPage: current })
  },

  onTabTap(event: any) {
    const index = event.currentTarget.dataset.index
    this.setData({ currentPage: index })
  },

  updateProgress() {
    const currentTime = audioContext.currentTime * 1000
    const sliderValue = (currentTime / this.data.duration) * 100
    this.setData({ currentTime, sliderValue })
  },

  onSliderChange(event: any) {
    // 1.滑动结束
    this.data.isSlider = false

    // 2.计算出要播放位置的时间
    const value = event.detail.value
    const currentTime = (value * this.data.duration) / 100
    audioContext.seek(currentTime / 1000)
  },

  onSliderChangeing(event: any) {
    // 1.正在滑动
    this.data.isSlider = true

    // 2.计算划动对应的播放时间
    const value = event.detail.value
    const currentTime = (value * this.data.duration) / 100
    this.setData({ currentTime })
  },

  onPauseTap() {
    if (audioContext.paused) {
      audioContext.play()
      this.setData({ isPlay: true })
    } else {
      audioContext.pause()
      this.setData({ isPlay: false })
    }
  }
})
