(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{790:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"otaa-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),e("p",[t._v("When setting up a new device in TTN it defaults to OTAA mode. For configuring it, you need the following three parameters: "),e("strong",[t._v("Device EUI, Application EUI")]),t._v(" and "),e("strong",[t._v("App Key")]),t._v(". You can get them all from the "),e("strong",[t._v("Overview page")]),t._v(".")]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/eqx6w4refhlqbklpj4cc.png",width:"100%","figure-number":"1",caption:"Device OTAA Parameters"}}),t._v(" "),e("p",[t._v("Now, let us configure the RAK811 to work in OTAA mode in the EU868 band, as an example.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("The default LoRa® working mode for the RAK811 is LoRaWAN® 1.0.2, while the default LoRa® join mode is OTAA, and the default LoRa® class is Class A.")])]),t._v(" "),e("ol",[e("li",[t._v("Set mode to "),e("strong",[t._v("OTAA")]),t._v(" and LoRa® device class to "),e("strong",[t._v("Class A")]),t._v(", with the following set of commands:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:join_mode:0\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:class:0\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:region:EU868\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/okwyucipaed3fnrarkso.png",width:"100%","figure-number":"2",caption:"Setting up the RAK811 Operation Mode"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Now that the modes are set, enter the parameters: : "),e("strong",[t._v("Device EUI, Application EUI")]),t._v(" and "),e("strong",[t._v("App Key")]),t._v(". Use the commands below. Remember to replace the "),e("strong",[t._v('"XXXX"')]),t._v(" with the corresponding parameter value for your particular case:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:dev_eui:XXXX\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:app_eui:XXXX\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+set_config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:app_key:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/jttmbmkhm0ac0duvap94.png",width:"100%","figure-number":"3",caption:"Setting up the RAK811 OTAA Parameters"}}),t._v(" "),e("ul",[e("li",[t._v("You should end up with a window as the one in "),e("strong",[t._v("Figure 3")]),t._v(" above ("),e("strong",[t._v("a series of OK messages")]),t._v(").")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Finally execute the join command:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+join\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/eevf8jgjt1p48i17vugw.png",width:"100%","figure-number":"4",caption:"Join Command"}}),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("You can test the connection by sending an uplink frame. Use the following for example:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("at+send"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lora:1:12345678\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/tsyls5mfkzctes7lh1jg.png",width:"100%","figure-number":"5",caption:"Sending an uplink frame"}}),t._v(" "),e("ul",[e("li",[t._v("If you get a response in your TTN live data feed as in "),e("strong",[t._v("Figure 6")]),t._v(", than you are all set!")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/gpkpni2w18kuvv0lqhi8.png",width:"100%","figure-number":"6",caption:"Sending Data to TTN from RAK811"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);