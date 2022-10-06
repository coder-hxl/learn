export const db = wx.cloud.database()

class XLCollection {
  collection: any

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

  get(data: any, options: any, isDoc = true): Promise<DB.IQueryResult> {
    if (isDoc) {
      return this.collection.doc(data).get()
    } else if (options) {
      return this.collection
        .where(data)
        .skip(options.offset)
        .limit(options.limit)
        .get()
    }

    return this.collection.get()
  }
}

export const loveCol = new XLCollection('c_love')
export const historyCol = new XLCollection('c_history')
