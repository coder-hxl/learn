import fhRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return fhRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return fhRequest.delete<IDataType>({
    url
  })
}

export function editPageData(url: string, editData: any) {
  return fhRequest.patch<IDataType>({
    url,
    data: editData
  })
}

export function newPageData(url: string, newData: any) {
  return fhRequest.post<IDataType>({
    url,
    data: newData
  })
}
