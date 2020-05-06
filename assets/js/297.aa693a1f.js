(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{630:function(t,a,e){"use strict";e.r(a);var s=e(19),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"otaa-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),e("p",[t._v("When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: "),e("strong",[t._v("Device EUI, Application EUI")]),t._v(" and "),e("strong",[t._v("App Key")]),t._v(". You can get them all from the "),e("strong",[t._v("Overview page")]),t._v(".")]),t._v(" "),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-device-overview.png",width:"100%","figure-number":"1",caption:"Device Overview Parameters"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("As an example, let\\u2019s join in OTAA mode, EU868 frequency and the default LoRa\\u00ae\\nclass is Class A.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("Execute the following commands one by one and in the\\norder given.")])]),t._v(" "),e("ol",[e("li",[t._v("Set the LoRa® join mode to\n"),e("strong",[t._v("OTAA")]),t._v(" as follows:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:join_mode:0\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Set the LoRa® class to "),e("strong",[t._v("Class A")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:class:0\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Set the frequency/region to "),e("strong",[t._v("EU868")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:region:EU868\n")])])]),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-join.png",width:"50%","figure-number":"2",caption:"AT Command for OTAA Join Mode, Class and Region"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),e("p",[t._v("Execute the following commands one by one and in the\\norder given.")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Set the "),e("strong",[t._v("Device EUI.")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:dev_eui:XXXX\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application EUI")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:app_eui:XXXX\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application Key")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:app_key:XXXX\n")])])]),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-otaa-device-eui.png",width:"50%","figure-number":"3",caption:"AT Command for OTAA Device EUI, Application EUI and Application Key"}}),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Reboot the RAK4200 LPWAN Breakout Module to save the parameters.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=device:restart\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[t._v("After resetting  RAK4200 LPWAN Breakout Module, join in OTAA mode:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+join\n")])])]),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/at-command-otaa-serial-port.png",width:"50%","figure-number":"4",caption:"AT Command for OTAA LoRa® Join via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Joined successfully! Now, let’s try to send a data from the  RAK4200 LPWAN Breakout Module to TTN:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+send=lora:2:0123456789\n")])])]),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-test-sample-data.png",width:"50%","figure-number":"5",caption:"OTAA Test Sample Data Sent via RAK Serial Port Tool"}}),t._v(" "),e("p",[t._v("You can then see the data sent from  RAK4600 LPWAN Breakout Module on TTN website as follows:")]),t._v(" "),e("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4600-breakout/connecting-ttn/otaa-test-sample-sent.png",width:"100%","figure-number":"6",caption:"OTAA Test Sample Data Sent Viewed in The Things Network"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);