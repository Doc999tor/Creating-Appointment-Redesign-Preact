import {decorate, observable, computed, action} from 'mobx'
class Store {
  count = 0

  setCount(payload) {
    this.count = payload
  }
  increment() {
    let count = this.count
    count++
    this.setCount(count)
  }
  decrement() {
    let count = this.count
    count--
    this.setCount(count)
  }
  clear() {
    this.setCount(0)
  }
}
Store = decorate(Store, {
  count: observable,
  increment: action,
  decrement: action,
  clear: action
})
export default new Store();