(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{641:function(t,a,e){"use strict";e.r(a);var r=e(19),o=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"otaa-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#otaa-mode"}},[t._v("#")]),t._v(" OTAA Mode")]),t._v(" "),e("ol",[e("li",[t._v("If you select “"),e("strong",[t._v("device_profile_otaa")]),t._v("”, it means you want to join ChirpStack in "),e("strong",[t._v("OTAA mode")]),t._v(".")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/o1o2cdekg9oyx8nojvcl.png",width:"100%","figure-number":"1",caption:"Chirpstack OTAA Activation"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Click “"),e("strong",[t._v("CREATE DEVICE")]),t._v("” then generate the application key in this page. You can write it by yourself or generate it automatically by clicking the following icon and press “"),e("strong",[t._v("SET DEVICE-KEYS")]),t._v("”.")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/b7nijxtl27bnr6mtgn6u.png",width:"100%","figure-number":"2",caption:"Chirpstack OTAA Set Device Keys"}}),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Set the "),e("strong",[t._v("Device EUI")]),t._v(' for the RAK4600 LPWAN Evaluation Board using the "'),e("strong",[t._v("dev_eui")]),t._v('" same with the image below:')])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vlakwnyaoitygjhhn0hx.png",width:"100%","figure-number":"3",caption:"Chirpstack OTAA Set Device EUI"}}),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application Key")]),t._v(' for the RAK4600 LPWAN Evaluation Board using the "'),e("strong",[t._v("app_key")]),t._v('" same with the image below:\n'),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/gomyqs6fsi4limpvngbp.jpg",width:"100%","figure-number":"4",caption:"Chirpstack OTAA Set Application Key"}})],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("The Application EUI which will be set into RAK4600 LPWAN Evaluation Board as “app_eui” is not necessary for ChirpStack, and you can set it to any value with a correct format.")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("p",[t._v("Configure RAK4600 LPWAN Evaluation Board by using the available AT Commands found in this "),e("a",{attrs:{href:"configuring-using-at-commands"}},[t._v("section")]),t._v(". Connect your RAK4600 LPWAN Evaluation Board in your Windows Machine.")])]),t._v(" "),e("li",[e("p",[t._v("Power it "),e("strong",[t._v("ON")]),t._v(" and open "),e("strong",[t._v("RAK Serial Port Tool")]),t._v(" on your PC as instructed "),e("a",{attrs:{href:"interfacing"}},[t._v("here")]),t._v(".")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("The default join mode is "),e("strong",[t._v("OTAA")]),t._v(", the default class is "),e("strong",[t._v("Class A")]),t._v(" and the default region is "),e("strong",[t._v("EU868")]),t._v(".")])]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("If the "),e("strong",[t._v("join mode")]),t._v(" is not in OTAA, just set the LoRa® join mode to "),e("strong",[t._v("OTAA")]),t._v(" as follows:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:join_mode:0\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mrydatc2hlwrxiyjpoqw.jpg",width:"60%","figure-number":"5",caption:"Chirpstack OTAA Join Mode via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v("Set the LoRa® class to "),e("strong",[t._v("Class A")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config-lora:class:0\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/edffrutqfohfxvhz0su8.jpg",width:"60%","figure-number":"6",caption:"Chirpstack OTAA Set Class via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Set the frequency/region to "),e("strong",[t._v("EU868")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:region:EU868\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/evudoedib3ovd9ye98gy.jpg",width:"60%","figure-number":"7",caption:"Chirpstack OTAA Set Region/Frequency via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[t._v("Set the "),e("strong",[t._v("Device EUI")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:dev_eui:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vsbevdit52xkqq0ocn5n.jpg",width:"60%","figure-number":"8",caption:"Chirpstack OTAA Set Dev EUI via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"11"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application EUI")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:app_eui:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/yzqpmzjhqj58akm7xqcm.jpg",width:"60%","figure-number":"9",caption:"Chirpstack OTAA Set Application EUI via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"12"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application Key")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:app_key:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/uf6hawlomc92hhp2dlbl.jpg",width:"60%","figure-number":"10",caption:"Chirpstack OTAA Set Application Key via RAK Serial Port Tool"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("After configuring all parameters, you need to reset RAK4600 LPWAN Evaluation Board to save the parameters.")])]),t._v(" "),e("ol",{attrs:{start:"13"}},[e("li",[t._v("After resetting, start to join:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+join\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/kp0hhztd0d1txr0xlsnd.jpg",width:"60%","figure-number":"11",caption:"Chirpstack OTAA Join via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"14"}},[e("li",[e("p",[t._v("You can then see the "),e("strong",[t._v("JoinRequest")]),t._v(" and "),e("strong",[t._v("JoinAccept")]),t._v(" on ChirpStack page:\n"),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/szgnpputwklp26s1epwd.png",width:"100%","figure-number":"12",caption:" Chirpstack OTAA JoinRequest and JoinAccept"}})],1)]),t._v(" "),e("li",[e("p",[t._v("Let’s try to send a data from RAK4600 LPWAN Evaluation Board to ChirpStack:")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+send=lora:2:1234567890\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/sy4nezodryajjldti9ki.jpg",width:"60%","figure-number":"13",caption:"Chirpstack OTAA Sample Data Sent via RAK Serial Port Tool"}}),t._v(" "),e("ul",[e("li",[t._v("You can then see the message on ChirpStack page:\n"),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/y8olaqg8ywggopiglkdv.png",width:"100%","figure-number":"14",caption:"Chirpstack Data Received Preview"}})],1)]),t._v(" "),e("p",[t._v("OK, that’s all about “Join in OTAA Mode” with ChirpStack.")])],1)}),[],!1,null,null,null);a.default=o.exports}}]);