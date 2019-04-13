import './styles/index.scss'

import dom from './script/dom'

const Plain = {
    $dom: dom,
    currentTheme: null,
    changeTheme(themeName) {
        !!this.currentTheme && dom.removeClass(document.body,`pl-theme-${this.currentTheme}`)
        dom.addClass(document.body, `pl-theme-${themeName}`)
        this.currentTheme = themeName
    },
    install(Vue, {
        theme = 'default'
    } = {}) {
        Vue.prototype.$plain = Plain
        this.changeTheme(theme)
    },
}

export default Plain