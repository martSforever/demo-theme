/**
 * 判断是否存在于数组中
 * @author 韦胜健
 * @date 2018/11/19
 */
function oneOf(val, array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item === val) return true;
    }
    return false;
}

/**
 * 判断变量类型
 * @author 韦胜健
 * @date 2018/11/19
 */
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

/**
 * 是否包含某种样式class
 * @author 韦胜健
 * @date 2018/11/19
 */
function hasClass(el, cls) {
    if (!!el.classList && !!el.classList.value) return oneOf(cls, el.classList.value.split(' '));
    else return (el.className || '').split(' ').indexOf(cls) > -1
}

/**
 * 添加class
 * @author 韦胜健
 * @date 2018/11/19
 */
function addClass(el, addCLs) {
    if (!el || !addCLs) return;
    const addClasses = typeOf(addCLs) === 'string' ? addCLs.split(' ') : addCLs
    if (!!el.classList && !!el.classList.value) {
        addClasses.forEach(item => el.classList.add(item))
    } else {
        const curClasses = (el.className || '').split(' ')
        addClasses.forEach(item => {
            if (curClasses.indexOf(item) === -1) curClasses.push(item)
        })
        el.className = curClasses.join(' ')
    }
}

/**
 * 删除class
 * @author 韦胜健
 * @date 2018/11/19
 */
function removeClass(el, rmCls) {
    if (!el || !rmCls) return;
    const rmClasses = typeOf(rmCls) === 'string' ? rmCls.split(' ') : rmCls
    if (!!el.classList && !!el.classList.value) {
        rmClasses.forEach(item => el.classList.remove(item))
    } else {
        const curClasses = (el.className || '').split(' ')
        for (let i = 0; i < rmClasses.length; i++) {
            const rmClass = rmClasses[i];
            const index = curClasses.indexOf(rmClass)
            if (index > -1) {
                curClasses.splice(index, 1)
                i--
            }
        }
        el.className = curClasses.join(' ')
    }
}

export default {
    hasClass,
    addClass,
    removeClass,
}