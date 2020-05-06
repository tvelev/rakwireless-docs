(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{725:function(t,e,o){"use strict";o.r(e);var a=o(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"accessing-the-internet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-internet"}},[t._v("#")]),t._v(" Accessing the Internet")]),t._v(" "),o("p",[t._v("Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gateway-config\n")])])]),o("p",[t._v("You will now then see a page like the following picture below:")]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img1}}),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Set pi password")]),t._v(" - used to set/change the password of the Gateway.")]),t._v(" "),o("li",[o("strong",[t._v("Set up RAK Gateway LoRa® Concentrator")]),t._v(" - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the Gateway will work with.")]),t._v(" "),o("li",[o("strong",[t._v("Restart packet -forwarder")]),t._v(" - used to restart the LoRa® packet forwarded process.")]),t._v(" "),o("li",[o("strong",[t._v("Edit packet-forwarder config")]),t._v("- used to open the global_conf.json file, in order to edit parameters manually.")]),t._v(" "),o("li",[o("strong",[t._v("Configure Wifi")]),t._v(" - used to configure the Wi-Fi settings in order to connect to a network.")]),t._v(" "),o("li",[o("strong",[t._v("Configure LAN")]),t._v(" - used to configure the Ethernet adapter settings.")])]),t._v(" "),o("h2",{attrs:{id:"connect-through-wi-fi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-wi-fi"}},[t._v("#")]),t._v(" Connect through Wi-Fi")]),t._v(" "),o("p",[t._v('If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+/4 by choosing "'),o("strong",[t._v("5 Configure WIFI")]),t._v('". By default, the RAK2245 Pi HAT Edition LPWAN Gateway Concentrator Module works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.')]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img2}}),t._v(" "),o("p",[t._v("There are 5 options to choose from in the Wi-Fi configuration menu:")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Enable AP Mode/Disable Client Mode")]),t._v(" - the Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).")]),t._v(" "),o("li",[o("strong",[t._v("Enable Client Mode/Disable AP Mode")]),t._v(" - the Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.")]),t._v(" "),o("li",[o("strong",[t._v("Modify SSID and pwd for AP Mode")]),t._v(" - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.")]),t._v(" "),o("li",[o("strong",[t._v("Add New SSID for Client")]),t._v(" - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.")]),t._v(" "),o("li",[o("strong",[t._v("Change Wi-Fi Country")]),t._v(" - this is used to modify the Resident Country to match with Wi-Fi standards.")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),o("p",[t._v("In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.")])]),t._v(" "),o("p",[t._v('Once Wi-Fi AP Mode has been disabled by choosing "'),o("strong",[t._v("2 Enable Client Mode/Disable AP Mode")]),t._v('", you can now then connect to a new Wi-Fi Network by choosing "'),o("strong",[t._v("4 Add New SSID for Client")]),t._v('":')]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img3}}),t._v(" "),o("ul",[o("li",[t._v("Start by selecting your country of residence:")])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img4}}),t._v(" "),o("ul",[o("li",[t._v("Enter the SSID of the network you want to connect:")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),o("p",[t._v("Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK2245 Pi hat again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the "),o("a",{attrs:{href:"#reverting-to-wi-fi-ap-mode"}},[t._v("Reverting to Wi-Fi AP Mode")]),t._v(" section which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.")])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img5}}),t._v(" "),o("ul",[o("li",[t._v("Enter also the password. Just leave it empty if None.")])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img6}}),t._v(" "),o("h2",{attrs:{id:"connect-through-ethernet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-through-ethernet"}},[t._v("#")]),t._v(" Connect through Ethernet")]),t._v(" "),o("p",[t._v("If you want to connect to router through Ethernet Cable, do the following steps:")]),t._v(" "),o("ul",[o("li",[t._v("In the main configuration menu, choose “"),o("strong",[t._v("6 Configure LAN")]),t._v("”. This will let you set up a static IP address for the Gateway’s Ethernet adapter.")]),t._v(" "),o("li",[t._v("Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.")]),t._v(" "),o("li",[t._v("By default, the IP Address of the Gateway's Ethernet is "),o("code",[t._v("192.168.10.10")])])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img7}}),t._v(" "),o("ul",[o("li",[t._v("Then configure the IP address of the Router. This is the LAN Interface IP address of the router.")])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img8}}),t._v(" "),o("ul",[o("li",[t._v("Press OK then the success message will appear.")]),t._v(" "),o("li",[t._v('Lastly, reboot the Gateway using the command "'),o("code",[t._v("sudo reboot")]),t._v('" in the command line and it will connect to the router successfully through Ethernet.')])]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("\n")])])]),o("h2",{attrs:{id:"optional-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-configurations"}},[t._v("#")]),t._v(" Optional Configurations")]),t._v(" "),o("p",[t._v("These configurations under this section are only optional and situational.")]),t._v(" "),o("h3",{attrs:{id:"reverting-to-wi-fi-ap-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reverting-to-wi-fi-ap-mode"}},[t._v("#")]),t._v(" Reverting to Wi-Fi AP Mode")]),t._v(" "),o("p",[t._v("In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK2245 Pi HAT Edition LPWAN Gateway Concentrator Module to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.")]),t._v(" "),o("ul",[o("li",[t._v("Remove the SD Card from your Raspberry Pi with the RAK2245 Pi HAT and insert it into your PC. Your PC should be able to detect it same with the image below:")])]),t._v(" "),o("rk-img",{attrs:{params:t.$page.frontmatter.params.img9}}),t._v(" "),o("ul",[o("li",[t._v('Using your "'),o("strong",[t._v("Command Prompt")]),t._v('" or "'),o("strong",[t._v("Terminal")]),t._v('", navigate to your SD Card and type this command to generate the "'),o("strong",[t._v("rak_ap")]),t._v('" file.')])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd > rak_ap\n")])])]),o("ul",[o("li",[t._v("Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your Raspberry Pi with the RAK2245 Pi HAT Edition LPWAN Gateway Concentrator Module and it should work again in Wi-Fi AP Mode.")])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);