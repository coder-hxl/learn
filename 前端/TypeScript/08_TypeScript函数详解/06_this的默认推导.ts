// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: 'fh',
  eacting() {
    console.log(this.name)
  }
}

info.eacting()
