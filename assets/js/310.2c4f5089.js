(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{643:function(t,a,e){"use strict";e.r(a);var s=e(19),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"abp-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abp-mode"}},[t._v("#")]),t._v(" ABP Mode")]),t._v(" "),e("ol",[e("li",[t._v("First, switch the activation method to ABP as shown in the following image:")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/bryeyppqcyb1amkfs4po.png",width:"100%","figure-number":"1",caption:"APB Activation in The Things Network"}}),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("These three parameters will be used on  RAK4600 LPWAN Evaluation Board: "),e("strong",[t._v("Device Address")]),t._v(", "),e("strong",[t._v("Network Session Key")]),t._v(" and "),e("strong",[t._v("App Session Key")]),t._v(".")])]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/bryeyppqcyb1amkfs4po.png",width:"100%","figure-number":"2",caption:"ABP Parameters in The Things Network"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("As an example, let's join in ABP mode, EU868 frequency, and LoRa® class is Class A.")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("If the join mode is not in ABP Mode, just set the LoRa® join mode to "),e("strong",[t._v("ABP")]),t._v(" as follows:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:join_mode:1\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/cl6jv8cge7hzkavag3hn.jpg",width:"60%","figure-number":"3",caption:"ABP Parameters in The Things Network"}}),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Set the LoRa® class to "),e("strong",[t._v("Class A")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:class:0\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mmll3jdm6l9hg3jm5jy7.jpg",width:"60%","figure-number":"4",caption:"AT Command for ABP LoRa® Class via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Set the frequency/region to "),e("strong",[t._v("EU868")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:region:EU868\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/hoxaobrwlgh6otjde6vd.jpg",width:"60%","figure-number":"5",caption:"AT Command for ABP LoRa® Class via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Set the "),e("strong",[t._v("Device Address")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:dev_addr:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/i5tmaceu0jqjbh3qt4po.jpg",width:"60%","figure-number":"6",caption:"AT Command for ABP LoRa® Device Address via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Set the "),e("strong",[t._v("Network Session Key")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:nwks_key:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/kc6fxzmr4ijlan1sgrh8.jpg",width:"60%","figure-number":"7",caption:"AT Command for ABP LoRa® Network Session Key via RAK Serial Port Tool"}}),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v("Set the "),e("strong",[t._v("Application Session Key")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+set_config=lora:apps_key:XXXX\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/wcfzckjltpwf2n8pdobs.jpg",width:"60%","figure-number":"8",caption:"AT Command for ABP LoRa® Application Session Key via RAK Serial Port Tool"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("After configuring all parameters, you need to reset  RAK4600 LPWAN Evaluation Board for saving parameters!")])]),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("After resetting your  RAK4600 LPWAN Evaluation Board, join in "),e("strong",[t._v("ABP mode")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("at+join\n")])])]),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/mqklekitvyx1smagkvx5.jpg",width:"60%","figure-number":"9",caption:"AT Command for ABP LoRa® Join via RAK Serial Port Tool"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE:")]),t._v(" "),e("p",[t._v("There is no need to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode")])]),t._v(" "),e("p",[t._v("Now, let’s try to send a data from the RAK4600 LPWAN Evaluation Board to TTN in ABP mode.")]),t._v(" "),e("rk-img",{attrs:{src:t.$frontmatter.static_root+"/hdyn5eezsmczhxvblpkn.jpg",width:"60%","figure-number":"10",caption:" OTAA Test Sample Data Sent via RAK Serial Port Tool"}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);