(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{462:function(e,t,n){var content=n(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("9dd3e8ac",content,!0,{sourceMap:!1})},471:function(e,t){},615:function(e,t){},616:function(e,t){},618:function(e,t){},619:function(e,t){},622:function(e,t){},639:function(e,t,n){"use strict";n(462)},640:function(e,t,n){var l=n(39)(!1);l.push([e.i,'.gm-style .gm-style-iw-t:after{background:transparent;display:none}.gm-style .gm-style-iw-c{overflow:visible}.container1{background-color:rgba(0,0,0,.2);padding:10px}.container1:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:"";height:15px;right:-15px;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(-135deg);width:15px;overflow:visible}.container2{background-color:rgba(0,0,0,.2);padding:10px}.container2:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:"";height:15px;right:-15px;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(-135deg);width:15px;overflow:visible}.container3{background-color:rgba(0,0,0,.2);padding:10px}.container3:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:"";height:15px;left:0;position:absolute;top:70px;transform:translate(-50%,-50%) rotate(45deg);width:15px;overflow:visible}.container4{background-color:rgba(0,0,0,.2);padding:10px}.container4:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:"";height:15px;left:0;position:absolute;top:110px;transform:translate(-50%,-50%) rotate(45deg);width:15px;overflow:visible}.container5{background-color:rgba(0,0,0,.2);padding:10px}.container5:after{background:linear-gradient(45deg,rgba(0,0,0,.3) 50%,hsla(0,0%,100%,0) 51%,hsla(0,0%,100%,0)) rgba(0,0,0,.3);box-shadow:-2px 2px 2px 0 hsla(0,0%,69.8%,.4);content:"";height:15px;right:-15px;position:absolute;top:95px;transform:translate(-50%,-50%) rotate(-140deg);width:15px;overflow:visible}.ui{font-weight:700;width:220px;padding-bottom:5px}.ui2,.ui4{font-weight:700;width:150px;padding-bottom:5px}.data{padding:5px 0 5px 10px}#map{height:100vh;background:grey}.gm-style-iw+div{display:none!important}button.gm-ui-hover-effect{visibility:hidden}',""]),e.exports=l},732:function(e,t,n){"use strict";n.r(t);n(22),n(17),n(20),n(32),n(21),n(33);var l=n(19),o=n(106),c=n(6),r=n(25),d=n(24),v=(n(72),n(12),n(71),n(47),n(613)),h=n.n(v),L=n(86),y=["host","port","endpoint"];function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m=Object(r.a)((function e(t,n,l){Object(d.a)(this,e),this.indexStation=t,this.indexSensor=n,this.isHigh=l})),O=1.5,w={data:function(){return{map:null,connection:{host:"txio.live",port:8083,endpoint:"/mqtt",clean:!0,connectTimeout:4e3,reconnectPeriod:4e3},subscription:{topic:"geyzer/data/#",qos:0},receiveNews:"",qosList:[{label:0,value:0},{label:1,value:1},{label:2,value:2}],client:{connected:!1},subscribeSuccess:!1,lel1:"Waiting...",lel2:"Waiting...",lel3:"Waiting...",lel4:"Waiting...",lel5:"Waiting...",lel12:0,lel22:0,lel32:0,lel42:0,lel52:0,lelArray:[]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({check:function(e,t,n,l){if(n>l){var o=new m(e,t,!0);this.checkWarning(o)}else{var c=new m(e,t,!1);this.checkWarning(c)}},checkLNG:function(){this.lelArray=[],this.lel1>=O&&this.lelArray.push(" LEL 1"),this.lel2>=O&&this.lelArray.push(" LEL 2"),this.lel3>=O&&this.lelArray.push(" LEL 3"),this.lel4>=O&&this.lelArray.push(" LEL 4"),this.lel5>=O&&this.lelArray.push(" LEL 5");var a=this.lelArray.toString();this.lelArray.length>1?a+=" readings are high":1==this.lelArray.length?a+=" reading is high":a="Good",this.checkLNGWarning(a)},createConnection:function(){var e=this,t={center:new google.maps.LatLng(3.2640663039813322,113.07239476715013),zoom:16,styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],mapTypeId:"hybrid"},map=new google.maps.Map(document.getElementById("googleMap"),t),marker=new google.maps.Marker({position:new google.maps.LatLng(3.2592932651185236,113.0752931476544),map:map,animation:google.maps.Animation.Drop}),n=new google.maps.InfoWindow({content:'<div class="container1"><div class="ui header">Petrochemical Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">VOC : Waiting...</div></div>',pixelOffset:new google.maps.Size(-160,90)});n.open(map,marker);var l=new google.maps.Marker({position:new google.maps.LatLng(3.2614980671619365,113.06751818919237),map:map,animation:google.maps.Animation.Drop}),c=new google.maps.InfoWindow({content:'<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">NH3 : Waiting...</div></div>',pixelOffset:new google.maps.Size(-160,100)});c.open(map,l);var r=new google.maps.Marker({position:new google.maps.LatLng(3.258601715715236,113.07704509915513),map:map,animation:google.maps.Animation.Drop}),d=new google.maps.InfoWindow({content:'<div class="container3"><div class="ui2 header">OBB Jetty</div><div class="data">O2 : Waiting...</div><div class="data">LEL : Waiting...</div><div class="data end">VOC : Waiting...</div></div>',pixelOffset:new google.maps.Size(125,90)});d.open(map,r);var v=new google.maps.Marker({position:new google.maps.LatLng(3.2647273706828495,113.07265982264411),map:map,animation:google.maps.Animation.Drop}),L=new google.maps.InfoWindow({content:'<div class="container4"><div class="ui4 header">DG yard</div><div class="data">O2 :Waiting...</div><div class="data">LEL : Waiting...</div><div class="data">VOC : Waiting...</div><div class="data">NH3 : Waiting...</div><div class="data">CL2 : Waiting...</div><div class="data end">H2S : Waiting...</div></div>',pixelOffset:new google.maps.Size(125,130)});L.open(map,v);var f=new google.maps.Marker({position:new google.maps.LatLng(3.2660908704052347,113.07120972436627),map:map,animation:google.maps.Animation.Drop}),m=new google.maps.InfoWindow({content:'<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : Waiting...</div><div class="data">LEL 2 : Waiting...</div><div class="data">LEL 3 : Waiting...</div><div class="data">LEL 4 : Waiting...</div><div class="data end">LEL 5 : Waiting...</div></div>',pixelOffset:new google.maps.Size(-160,115)});m.open(map,f);var w=this.connection,k=w.host,x=w.port,E=w.endpoint,W=Object(o.a)(w,y),T="ws://".concat(k,":").concat(x).concat(E);try{this.client=h.a.connect(T,W)}catch(e){console.log("mqtt.connect error",e)}this.client.on("connect",(function(){console.log("Connection succeeded!")})),this.client.on("error",(function(e){console.log("Connection failed",e)})),this.client.on("message",(function(t,l){if("test/responsive"===t&&(l=JSON.parse(l)),"geyzer/data/petrochemical"===t&&1==(l=JSON.parse(l)).JID&&(n.setContent('<div class="container1"><div class="ui header">Petrochemical Jetty</div><div class="data">O2 : '.concat(l.O2,'</div><div class="data">LEL : ').concat(l.LEL,'</div><div class="data end">VOC : ').concat(l.VOC,"</div></div>")),e.checkWarningRemarks(0),e.check(0,0,l.O2,21),e.check(0,1,l.LEL,O),e.check(0,2,l.VOC,10)),"geyzer/data/nh3"===t&&3==(l=JSON.parse(l)).JID&&(c.setContent('<div class="container2"><div class="ui header">Ammonia Whaft Jetty</div><div class="data">O2 : '.concat(l.O2,'</div><div class="data">LEL : ').concat(l.LEL,'</div><div class="data end">NH3 : ').concat(l.NH3,"</div></div>")),e.checkWarningRemarks(1),e.check(1,0,l.O2,21),e.check(1,1,l.LEL,O),e.check(1,2,l.NH3,10)),"geyzer/data/OBB"===t&&2==(l=JSON.parse(l)).JID&&(d.setContent('<div class="container3"><div class="ui2 header">OBB Jetty</div><div class="data">O2 : '.concat(l.O2,'</div><div class="data">LEL : ').concat(l.LEL,'</div><div class="data end">VOC : ').concat(l.VOC,"</div></div>")),e.checkWarningRemarks(2),e.check(2,0,l.O2,21),e.check(2,1,l.LEL,O),e.check(2,2,l.VOC,10)),"geyzer/data/dg"===t&&4==(l=JSON.parse(l)).JID){l.O2,l.LEL,l.VOC,l.NH3,l.CL2,l.H2S;L.setContent('<div class="container4"><div class="ui4 header">DG yard</div><div class="data">O2 : '.concat(l.O2,'</div><div class="data">LEL : ').concat(l.LEL,'</div><div class="data">VOC : ').concat(l.VOC,'</div><div class="data">NH3 : ').concat(l.NH3,'</div><div class="data">CL2 : ').concat(l.CL2,'</div><div class="data end">H2S : ').concat(l.H2S,"</div></div>")),e.checkWarningRemarks(3),e.check(3,0,l.O2,21),e.check(3,1,l.LEL,O),e.check(3,2,l.VOC,10),e.check(3,3,l.NH3,10),e.check(3,4,l.CL2,10),e.check(3,5,l.H2S,10)}if("geyzer/data/lel/1"===t&&(l=JSON.parse(l),e.lel1=l,e.lel12=l,e.checkLNG(),m.setContent('<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : '.concat(e.lel1,'</div><div class="data">LEL 2 : ').concat(e.lel2,'</div><div class="data">LEL 3 : ').concat(e.lel3,'</div><div class="data">LEL 4 : ').concat(e.lel4,'</div><div class="data end">LEL 5 : ').concat(e.lel5,"</div></div>"))),"geyzer/data/lel/2"===t){l=JSON.parse(l),e.lel2=l,e.lel22=l;l.LEL;m.setContent('<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : '.concat(e.lel1,'</div><div class="data">LEL 2 : ').concat(e.lel2,'</div><div class="data">LEL 3 : ').concat(e.lel3,'</div><div class="data">LEL 4 : ').concat(e.lel4,'</div><div class="data end">LEL 5 : ').concat(e.lel5,"</div></div>")),e.checkLNG()}if("geyzer/data/lel/3"===t){l=JSON.parse(l),e.lel3=l,e.lel32=l;l.LEL;m.setContent('<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : '.concat(e.lel1,'</div><div class="data">LEL 2 : ').concat(e.lel2,'</div><div class="data">LEL 3 : ').concat(e.lel3,'</div><div class="data">LEL 4 : ').concat(e.lel4,'</div><div class="data end">LEL 5 : ').concat(e.lel5,"</div></div>")),e.checkLNG()}if("geyzer/data/lel/4"===t){(l=JSON.parse(l)).LEL;e.lel4=l,e.lel42=l,m.setContent('<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : '.concat(e.lel1,'</div><div class="data">LEL 2 : ').concat(e.lel2,'</div><div class="data">LEL 3 : ').concat(e.lel3,'</div><div class="data">LEL 4 : ').concat(e.lel4,'</div><div class="data end">LEL 5 : ').concat(e.lel5,"</div></div>")),e.checkLNG()}if("geyzer/data/lel/5"===t){(l=JSON.parse(l)).LEL;e.lel5=l,e.lel52=l,m.setContent('<div class="container5"><div class="ui header">LNG ISO Tank Yard</div><div class="data">LEL 1 : '.concat(e.lel1,'</div><div class="data">LEL 2 : ').concat(e.lel2,'</div><div class="data">LEL 3 : ').concat(e.lel3,'</div><div class="data">LEL 4 : ').concat(e.lel4,'</div><div class="data end">LEL 5 : ').concat(e.lel5,"</div></div>")),e.checkLNG()}"geyzer/data/weather"===t&&(l=JSON.parse(l)).ID,"geyzer/server/stats"===t&&(l=JSON.parse(l))}))},doSubscribe:function(){var e=this,t=this.subscription,n=t.topic,l=t.qos;this.client.subscribe(n,{qos:l},(function(t,n){t||(e.subscribeSuccess=!0)}))}},Object(L.b)({checkWarning:"checkWarning",checkWarningRemarks:"checkWarningRemarks",checkLNGWarning:"checkLNGWarning"})),mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.createConnection(),e.doSubscribe();case 2:case"end":return t.stop()}}),t)})))()}},k=w,x=(n(639),n(43)),component=Object(x.a)(k,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{width:"100%",height:"calc(100vh - 120px)"},attrs:{id:"googleMap"}})}),[],!1,null,null,null);t.default=component.exports}}]);