import fhRequest from '../../index'

import { IDataType } from '../../types'

enum dashboardAPI {
  amountGoodsList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountGoodsList() {
  return fhRequest.get<IDataType>({
    url: dashboardAPI.amountGoodsList
  })
}
export function getCategoryGoodsCount() {
  return fhRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return fhRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return fhRequest.get<IDataType>({
    url: dashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return fhRequest.get<IDataType>({
    url: dashboardAPI.addressGoodsSale
  })
}
