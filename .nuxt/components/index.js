export const DatePicker = () => import('../..\\components\\DatePicker.vue' /* webpackChunkName: "components/date-picker" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Maps = () => import('../..\\components\\Maps.vue' /* webpackChunkName: "components/maps" */).then(c => wrapFunctional(c.default || c))
export const Maps2 = () => import('../..\\components\\Maps2.vue' /* webpackChunkName: "components/maps2" */).then(c => wrapFunctional(c.default || c))
export const Maps3 = () => import('../..\\components\\Maps3.vue' /* webpackChunkName: "components/maps3" */).then(c => wrapFunctional(c.default || c))
export const MonthPicker = () => import('../..\\components\\MonthPicker.vue' /* webpackChunkName: "components/month-picker" */).then(c => wrapFunctional(c.default || c))
export const MultipleLineChart = () => import('../..\\components\\MultipleLineChart.vue' /* webpackChunkName: "components/multiple-line-chart" */).then(c => wrapFunctional(c.default || c))
export const Notification = () => import('../..\\components\\Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c))
export const SensorButton = () => import('../..\\components\\SensorButton.vue' /* webpackChunkName: "components/sensor-button" */).then(c => wrapFunctional(c.default || c))
export const SingleLineChart = () => import('../..\\components\\SingleLineChart.vue' /* webpackChunkName: "components/single-line-chart" */).then(c => wrapFunctional(c.default || c))
export const Status = () => import('../..\\components\\Status.vue' /* webpackChunkName: "components/status" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const WeatherForecast = () => import('../..\\components\\WeatherForecast.vue' /* webpackChunkName: "components/weather-forecast" */).then(c => wrapFunctional(c.default || c))
export const WeatherMain2 = () => import('../..\\components\\WeatherMain2.vue' /* webpackChunkName: "components/weather-main2" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
