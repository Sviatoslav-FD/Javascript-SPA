import AbstractView from './AbstractView.js'

export default class Settings extends AbstractView {
  constructor (params) {
    super(params)
    this.setTitle('Settings')
  }
  
  render () {
    return `<h1>Settings</h1>`
  }
}
