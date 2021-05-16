import AbstractView from './AbstractView.js'

export default class Posts extends AbstractView {
  constructor (params) {
    super(params)
    this.setTitle('Posts')
  }
  
  render () {
    return `<h1>Posts</h1>`
  }
}
