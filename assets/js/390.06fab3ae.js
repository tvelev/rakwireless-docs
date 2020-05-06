(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{723:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connect-the-gateway-with-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-gateway-with-chirpstack"}},[t._v("#")]),t._v(" Connect the Gateway with Chirpstack")]),t._v(" "),a("p",[t._v("The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack "),a("a",{attrs:{href:"https://www.chirpstack.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("For the RAK7243 LPWAN Developer Gateway there are 2 ways to use the ChirpStack:")]),t._v(" "),a("h2",{attrs:{id:"_1-using-the-built-in-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-the-built-in-chirpstack"}},[t._v("#")]),t._v(" 1. Using the built-in ChirpStack")]),t._v(" "),a("p",[t._v("There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.")]),t._v(" "),a("ul",[a("li",[t._v("When you use it for the first time after burning the latest firmware, the gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the gateway boots.")]),t._v(" "),a("li",[t._v("However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in "),a("RouterLink",{attrs:{to:"/en-us/quick-start/rak7243/quick-start-guide/configuring-the-gateway.html"}},[t._v("Configuring the Gateway")]),t._v(" the Gateway section.")],1),t._v(" "),a("li",[a("strong",[t._v("Optional")]),t._v(": If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via "),a("a",{attrs:{href:"https://www.advanced-ip-scanner.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Advanced IP Scanner")]),a("OutboundLink")],1),t._v(". Copy the IP Address of your Gateway, it should have a Manufacturer name of "),a("strong",[t._v("Raspberry Pi Foundation")]),t._v(":")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/advanced-ip-scanner.png",width:"100%","figure-number":"1",caption:"IP address of your RAK7243 using IP Scanner"}}),t._v(" "),a("ul",[a("li",[t._v("There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:\n"),a("ul",[a("li",[a("strong",[t._v("Browser Address")]),t._v(": "),a("code",[t._v("<Gateway IP address>:8080")]),t._v(" ("),a("strong",[t._v("Example")]),t._v(": https:/192.168.254.105:8080)")]),t._v(" "),a("li",[a("strong",[t._v("Username")]),t._v(": admin")]),t._v(" "),a("li",[a("strong",[t._v("Password")]),t._v(": admin")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),a("p",[t._v('It is advisable to change your password to tighten the security of your account. You can change this by clicking the "'),a("strong",[t._v("change password")]),t._v('" button at the user icon.')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirpstack-ui.png",width:"100%","figure-number":"2",caption:"ChirpStack Web-based UI"}}),t._v(" "),a("ul",[a("li",[t._v("Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/gateways-in-chirpstack.jpg",width:"100%","figure-number":"3",caption:"Available Gateways in Chirpstack"}}),t._v(" "),a("ul",[a("li",[t._v('Go to the rak_gateway and see the "'),a("strong",[t._v("Last seen")]),t._v('" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirpstack-last-seen.jpg",width:"100%","figure-number":"4",caption:"Last Seen Status"}}),t._v(" "),a("h2",{attrs:{id:"_2-using-an-independent-chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-using-an-independent-chirpstack"}},[t._v("#")]),t._v(" 2. Using an Independent ChirpStack")]),t._v(" "),a("p",[t._v("There are 2 ways that you can get an independent ChirpStack:")]),t._v(" "),a("ol",[a("li",[t._v("Use RAK's Cloud TestingChirpStack - If you want to use RAK's Cloud Testing ChirpStack, contact RAK's Technical Support in the Forum: "),a("a",{attrs:{href:"https://forum.rakwireless.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://forum.rakwireless.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Setup an Independent ChirpStack by yourself.\nThis is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it "),a("a",{attrs:{href:"https://www.chirpstack.io/guides/debian-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(":")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirpstack-guide-ubuntu.png",width:"100%","figure-number":"5",caption:"Chirpstack Getting Started Guide on Ubuntu"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️WARNING")]),t._v(" "),a("p",[t._v('Remember to run the "'),a("code",[t._v("sudo gateway-config")]),t._v('" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu '),a("RouterLink",{attrs:{to:"/en-us/quick-start/rak7243/quick-start-guide/configuring-the-gateway.html#setup-rak-gateway-lora®-concentrator"}},[t._v("Setup RAK Gateway LoRa® concentrator")]),t._v(".")],1)]),t._v(" "),a("ul",[a("li",[t._v("Assuming you have set it up correctly, Login to your ChirpStack to register your gateway by opening the ChirpStack's web page in a browser by entering:\n"),a("ul",[a("li",[a("strong",[t._v("Browser Address")]),t._v(": "),a("code",[t._v("<IP Address of ChirpStack>:8080")])]),t._v(" "),a("li",[a("strong",[t._v("Username")]),t._v(": admin")]),t._v(" "),a("li",[a("strong",[t._v("Password")]),t._v(": admin")])])])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirpstack-login.png",width:"100%","figure-number":"6",caption:"ChirpStack Login Page"}}),t._v(" "),a("ul",[a("li",[t._v('Click "'),a("strong",[t._v("Gateways")]),t._v('" and Press "+ '),a("strong",[t._v("CREATE")]),t._v('" to register your Gateway')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirpstack-reg-gateway.png",width:"100%","figure-number":"7",caption:"ChirpStack Registered Gateways"}}),t._v(" "),a("ul",[a("li",[t._v('Click "'),a("strong",[t._v("Create")]),t._v('" to register your gateway and fill up the necessary information.')])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/reg-own-gateway.png",width:"100%","figure-number":"8",caption:"Registering your own Gateway"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("Fill in the Gateway ID that we got from the "),a("RouterLink",{attrs:{to:"/en-us/quick-start/rak7243/quick-start-guide/configuring-the-gateway.html"}},[t._v("Configuring the Gateway")]),t._v(" section, also called Gateway EUI.")],1)]),t._v(" "),a("li",[a("p",[t._v("If you have properly configured your gateway and there is a network connection between the external ChirpStack and your gateway, you should see the following page and status:")])])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak7243/8.connecting to chirpstack/chirsptack-successful-register.png",width:"100%","figure-number":"9",caption:"Successfully Registered the Gateway"}}),t._v(" "),a("p",[a("strong",[t._v("Congratulations!")]),t._v(" 🎉 You have connected your gateway to an external ChirpStack Successfully!")])],1)}),[],!1,null,null,null);e.default=i.exports}}]);