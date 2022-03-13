import fhRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return fhRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
