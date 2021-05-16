import AbstractView from './AbstractView.js'

export default class Dashboard extends AbstractView {
  constructor (params) {
    super(params)
    this.setTitle('Dashboard')
  }
  
  render () {
    return `<h1>Dashboard</h1>`
  }
}
