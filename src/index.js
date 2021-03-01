import bhButton  from './components/button/index'
import bhAlert from './components/alert/index'
import bhChose from './components/chose/index'
import bhShare from './components/share/index'
import bhCard from './components/card/index'
 const components = {
    bhButton,
    bhAlert,
    bhChose,
    bhShare,
    bhCard,
}

export {bhButton,
    bhAlert,
    bhChose,
    bhShare,
    bhCard}
const install = function (Vue, options = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
    Vue.prototype.$bhAlert = alert;
}

export default install

