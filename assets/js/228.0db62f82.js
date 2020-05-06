(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{561:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gateway-configuring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-configuring"}},[e._v("#")]),e._v(" Gateway Configuring")]),e._v(" "),a("h2",{attrs:{id:"packet-forwarder-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packet-forwarder-set-up"}},[e._v("#")]),e._v(" Packet Forwarder Set-up")]),e._v(" "),a("ol",[a("li",[e._v("In the Web Management Platform, navigate through "),a("code",[e._v("LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup")]),e._v(", set the Protocol in the drop-down list to "),a("strong",[e._v("Semtech UDP GWMP Protocol")]),e._v(". You need only change the Server Address in order to forward the traffic to your ChirpStack running on the Ubuntu Instance (AWS). Enter your Instance Public IP Address in the field marked with the red rectangle in the image below:")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-packet-forwader.jpg",width:"100%","figure-number":"1",caption:"ChirpStack Packet Forwarder Configuration"}}),e._v(" "),a("ol",[a("li",[e._v('Click "'),a("strong",[e._v("Save and Apply")]),e._v('" and go to your ChirpStack Web UI running on the AWS Instance "'),a("code",[e._v("IP Address:8080")]),e._v('". Go to the Gateway tab. Press the “'),a("strong",[e._v("Create")]),e._v("” button.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-add-gateway.jpg",width:"100%","figure-number":"2",caption:"ChirpStack Gateways Creation"}}),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("In the next window, input the "),a("strong",[e._v("Gateway Name")]),e._v(", "),a("strong",[e._v("EUI and Description")]),e._v(". Select a network server and Service Profile from the drop-down menu (remember those are pre-configured with the RAKwireless image). Finally click the “"),a("strong",[e._v("Create Gateway")]),e._v("” button.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-param.jpg",width:"100%","figure-number":"3",caption:"ChirpStack Gateway Parameters"}}),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Assuming you entered the parameters correctly, you should see your Gateway status as seen is a few second in the Gateway Details tab. You can also monitor Live LoRa® Frames in the tab with the same name to see incoming traffic.")])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-details.jpg",width:"100%","figure-number":"4",caption:"ChirpStack Gateway Details"}}),e._v(" "),a("h2",{attrs:{id:"mqtt-bridge-set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-bridge-set-up"}},[e._v("#")]),e._v(" MQTT Bridge Set-up")]),e._v(" "),a("p",[e._v("If you want to use the MQTT Bridge to forward your LoRa® Traffic to your LoRa® Network Server you need to configure your Gateway use the Bridge instead of the Packet Forwarder.")]),e._v(" "),a("ol",[a("li",[e._v("Navigating through "),a("code",[e._v("LoRa® Gateway tab-> LoRa® Packet Forwarder-> General Setup")]),e._v(", set the Protocol in the drop-down list to "),a("strong",[e._v("LoRa® Gateway MQTT Bridge")]),e._v('. Afterwhich, click "'),a("strong",[e._v("Save and Apply")]),e._v('".')])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-mqtt-bridge.jpg",width:"100%","figure-number":"5",caption:"Gateway MQTT Bridge Protocol"}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Next, go to the LoRa® Gateway MQTT Bridge tab. Enable the functionality by with the blue slider and choose the type of LoRa® Network Server you are going to be using .")])]),e._v(" "),a("li",[a("p",[e._v("Set the address to the address of the AWS Instance and the port to 1883, Save and Apply.")])])]),e._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-gateway-mqtt-param.jpg",width:"100%","figure-number":"6",caption:"Gateway MQTT Bridge Parameters"}}),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Lastly, register your Gateway to Chirpstack if you have not done so. You can follow the steps undergone in the Packet Forwarder Set-up section of the "),a("RouterLink",{attrs:{to:"/en-us/deployment-guide/amazon-web-service/configure-your-gateway.html#packet-forwarder-set-up"}},[e._v("Configuring your Gateway")]),e._v(" section.")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);