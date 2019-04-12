import './styles/index.scss'

import dom from './script/dom'

const Plain = {
    $dom: dom,
    install(Vue) {
        Vue.prototype.$plain = Plain
        dom.addClass(document.body, 'pl-theme-default')
    },
}

export default Plain