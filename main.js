/**
 * Notion 个人页面自定义脚本
 * @authors rusyue (rusyue@live.com)
 * @date    2022-03-10 23:11:03
 * @version 1.0
 */

var el = document.querySelector('h1')

el.addEventListener('click', function (ev) {
    console.log(this)
    this.flag = !this.flag
    this.style.color = this.flag ? 'red' : 'green'
}, false)

console.log('hello, notion pages!')

