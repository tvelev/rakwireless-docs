(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{677:function(t,e,o){"use strict";o.r(e);var _=o(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"at-commands-for-rak612-lpwan-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#at-commands-for-rak612-lpwan-button"}},[t._v("#")]),t._v(" AT Commands for RAK612 LPWAN Button")]),t._v(" "),o("p",[t._v("The purpose of this document is to demonstrate on how to configure the LPWAN Button thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("AT Command")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("at+version")])]),t._v(" "),o("td",[t._v("Get the current firmware version.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+mode=0")])]),t._v(" "),o("td",[t._v("Set the LPWAN Button to work LoRaWAN® mode.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+band=XXX")])]),t._v(" "),o("td",[t._v("Set the region for LoRa®. "),o("br"),t._v("• XXX - one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=dev_eui")])]),t._v(" "),o("td",[t._v("Check the current device EUI")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=join_mode:X")])]),t._v(" "),o("td",[t._v("Set the activation method "),o("br"),t._v("• X - 0: ABP, 1: OTAA")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=dev_eui:XXXX")])]),t._v(" "),o("td",[t._v("Set the device EUI for OTAA. "),o("br"),t._v("• XXXX - the device EUI.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=app_eui:XXXX")])]),t._v(" "),o("td",[t._v("Set the application EUI for OTAA. "),o("br"),t._v("• XXXX - the application EUI.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=app_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the application key for OTAA. "),o("br"),t._v("• XXXX - the application key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=dev_addr:XXXX")])]),t._v(" "),o("td",[t._v("Set the device address for ABP. "),o("br"),t._v("• XXXX - the device address.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=nwks_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the network session key for ABP. "),o("br"),t._v("• XXXX - the network session key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=apps_key:XXXX")])]),t._v(" "),o("td",[t._v("Set the application session key for ABP. "),o("br"),t._v("• XXXX - the application session key.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+set_config=timer_sleep:XX")])]),t._v(" "),o("td",[t._v("The cycle time in seconds before the LPWAN Button will turn off since the last time you pressed any key "),o("br"),t._v("• XX - time in seconds; 0 - the default value meaning that it will not power cycle.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+get_config=timer_sleep")])]),t._v(" "),o("td",[t._v("Get the current sleep timer value.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+key_config=X,YY,ZZZZ")])]),t._v(" "),o("td",[t._v("Customize the function of each key. "),o("br"),t._v("• X - the number of the key that you want to customize "),o("br"),t._v("• YY - the frame port where you are sending the data "),o("br"),t._v("• ZZZZ - the actual data that you want to send when you press this specific key of the LPWAN Button.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+send=X")])]),t._v(" "),o("td",[t._v("The type of data that you are sending. "),o("br"),t._v("• X - 0: unconfirm, 1: confirm")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+join=otaa")])]),t._v(" "),o("td",[t._v("Join via OTAA.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+join=abp")])]),t._v(" "),o("td",[t._v("Join via ABP.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("at+reset=0")])]),t._v(" "),o("td",[t._v("Restart the LPWAN Button.")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);