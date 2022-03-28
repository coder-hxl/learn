import { defineStore } from 'pinia'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboard } from './types'

export const useDashboardStore = defineStore({
  id: 'dashboard',
  state: (): IDashboard => ({
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  }),
  getters: {},
  actions: {
    changeCategoryGoodsCount(data: any[]) {
      this.categoryGoodsCount = data
    },
    changeCategoryGoodsSale(data: any[]) {
      this.categoryGoodsSale = data
    },
    changeCategoryGoodsFavor(data: any[]) {
      this.categoryGoodsFavor = data
    },
    changeAddressGoodsSale(data: any[]) {
      this.addressGoodsSale = data
    },
    async getDashboardDataActions() {
      const categoryCountResult = await getCategoryGoodsCount()
      this.changeCategoryGoodsCount(categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      this.changeCategoryGoodsSale(categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      this.changeCategoryGoodsFavor(categoryFavorResult.data)
      const addressSaleResult = await getAddressGoodsSale()
      this.changeAddressGoodsSale(addressSaleResult.data)
    }
  }
})
