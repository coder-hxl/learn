const db = wx.cloud.database()

class XLCollection {
  collection: DB.CollectionReference

  constructor(collectionName: string) {
    this.collection = db.collection(collectionName)
  }

  add(data: any) {
    return this.collection.add({ data })
  }

  delete(data: any, isDoc = true) {
    if (isDoc) {
      return this.collection.doc(data).remove()
    }

    return this.collection.where({ data }).reomve()
  }

  update(data: any, isDoc = true) {
    if (isDoc) {
      return this.collection.doc(data).update()
    }

    return this.collection.where({ data }).updata()
  }

  get(offset = 0, limit = 20, data?: any, isDoc = true) {
    if (isDoc) {
      return this.collection.doc(data ?? '').get()
    }

    return this.collection
      .where(data || {})
      .skip(offset)
      .limit(limit)
      .get()
  }
}

export const loveCol = new XLCollection('c_love')
export const historyCol = new XLCollection('c_history')
