(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{607:function(e,r,t){"use strict";t.r(r);var a=t(19),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrading-the-firmware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-the-firmware"}},[e._v("#")]),e._v(" Upgrading the Firmware")]),e._v(" "),t("p",[e._v("The following steps show you how to update the firmware for RAK4200 LPWAN Breakout Module.")]),e._v(" "),t("ol",[t("li",[e._v("Download and install the software needed in your PC:")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK Serial Port Tool"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/Tools/RAK_Upgrade_Tool_V1.0.rar",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK Firmware Upgrade Tool"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/RAK4200/Firmware/RAK4200_V3.2.0.12.rar",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAK4200 Firmware"),t("OutboundLink")],1)])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Connect your RAK4200 LPWAN Breakout Module into your windows machine as instructed in the "),t("RouterLink",{attrs:{to:"/en-us/quick-start/rak4200-breakout/interfacing.html"}},[e._v("Interfacing with RAK4200 LPWAN Breakout Module")])],1)]),e._v(" "),t("li",[t("p",[e._v("Open the RAK Serial Port Tool you have just installed and let RAK4200 work in boot mode by setting an AT command through serial port as follows:")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("at+set_config=device:boot\n")])])]),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/boot-mode.jpg",width:"65%","figure-number":"1",caption:"Entering Boot Mode"}}),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.")])]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/rak-upgrade-tool.jpg",width:"80%","figure-number":"2",caption:"RAK Firmware Upgrade Tool"}}),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Click “"),t("strong",[e._v("Choose File")]),e._v("” button to choose a correct upgrade file:")])]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/upgrade-file.jpg",width:"80%","figure-number":"3",caption:"Choosing the Correct Upgrade file"}}),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Click “"),t("strong",[e._v("Start")]),e._v("” to upgrade, this may take a minute:")])]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/upgrade-process.jpg",width:"80%","figure-number":"4",caption:"Firmware Upgrading in Process"}}),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("You should see something like the image below if everything went well.")])]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/successful-upgrade.jpg",width:"80%","figure-number":"5",caption:"Successfully Upgraded Firmware"}}),e._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[t("p",[e._v("CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.")])]),e._v(" "),t("li",[t("p",[e._v("Choose the correct "),t("strong",[e._v("COM port")]),e._v(" and set the baud rate to "),t("strong",[e._v("115200")]),e._v(". Then open the serial port and enter the AT command shown below to restart.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("at+set_config=device:restart\n")])])]),t("rk-img",{attrs:{src:"/assets/images/quick-start-guide/rak4200-breakout/upgrading-the-firmware/device-restart.jpg",width:"65%","figure-number":"6",caption:"Restarting your Device"}}),e._v(" "),t("p",[e._v("This information means that you have uploaded the Firmware successfully!")])],1)}),[],!1,null,null,null);r.default=o.exports}}]);