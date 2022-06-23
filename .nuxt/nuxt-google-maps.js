import Vue from 'vue';
import GMap from "C:\\Users\\Sea-Ic\\Desktop\\PROJECTS\\Bintulu V2.0\\bintulu-dashboard V2\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\Sea-Ic\\Desktop\\PROJECTS\\Bintulu V2.0\\bintulu-dashboard V2\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\Sea-Ic\\Desktop\\PROJECTS\\Bintulu V2.0\\bintulu-dashboard V2\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\Sea-Ic\\Desktop\\PROJECTS\\Bintulu V2.0\\bintulu-dashboard V2\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "AIzaSyAeDeYlQ30SsflxnhsDQmh24qeTuzTdBic", loaded: false, libraries: undefined})
}