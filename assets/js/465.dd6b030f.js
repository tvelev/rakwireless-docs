(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{798:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"upgrading-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-the-firmware"}},[t._v("#")]),t._v(" Upgrading the Firmware")]),t._v(" "),r("p",[t._v("If the firmware version of your RAK811 LPWAN Evaluation Board is newer than V3.0.0.0 or you have just burned the bootloader into RAK811 LPWAN Evaluation Board according to the "),r("a",{attrs:{href:"https://doc.rakwireless.com/rak811-lora---evaluation-board/burning-the-bootloader-into-the-device",target:"_blank",rel:"noopener noreferrer"}},[t._v("Burning Bootloader into the Device"),r("OutboundLink")],1),t._v(" document, proceed to "),r("strong",[t._v("Step 2")]),t._v(".")]),t._v(" "),r("ol",[r("li",[t._v("In case you have not just burned the bootloader as instructed in the previous section, you need to manually go into "),r("strong",[t._v("boot mode")]),t._v(". Connect you board via the USB interface and enter the following "),r("strong",[t._v("AT command")]),t._v(" after you have connected via the proper COM port:")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("📝 NOTE")]),t._v(" "),r("p",[t._v("Make sure to choose the correct port in the COM Port field. You can check this in the "),r("RouterLink",{attrs:{to:"/en-us/quick-start/rak811/interfacing-with-rak811.html"}},[t._v("Interfacing with RAK 811 Development Board")]),t._v(" document.")],1)]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("at+set_config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device:boot\n")])])]),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/vbshextj0q190mzk6hhf.jpg",width:"60%","figure-number":"1",caption:"Entering Boot Mode"}}),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("Download the "),r("strong",[t._v("RAK Upgrade Tool")]),t._v(" from the RAKwireless website "),r("strong",[r("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1)]),t._v(". Then, open the tool. Again don't forget to choose the correct port!")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/e9ratal5kgle1mwh4ufu.png",width:"100%","figure-number":"2",caption:"RAK Upgrade Tool"}}),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("Click “"),r("strong",[t._v("Choose File")]),t._v("” and choose the firmware you have downloaded for your desired frequency band.")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/nguqg8huem2urdte26ub.png",width:"100%","figure-number":"3",caption:"Choosing the Correct Upgrade file"}}),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("Click “"),r("strong",[t._v("Start")]),t._v("” to upgrade, this may take a minute:")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/wjdxnmvu2bwkjfj2rgmd.png",width:"100%","figure-number":"4",caption:"Firmware Upgrading in Process"}}),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("You should see something like the image in "),r("strong",[t._v("Figure 5")]),t._v(", if everything went well.")])]),t._v(" "),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/e7dcwivj7lv7zupcekok.jpg",width:"100%","figure-number":"5",caption:"Successfully Upgraded Firmware"}}),t._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[r("p",[t._v("Now, "),r("strong",[t._v("CLOSE")]),t._v(" the upgrade tool and "),r("strong",[t._v("OPEN")]),t._v(" the serial port too, again.")])]),t._v(" "),r("li",[r("p",[t._v("Choose the correct "),r("strong",[t._v("COM port")]),t._v(" and set the baud rate to "),r("strong",[t._v("115200")]),t._v(". Then open the serial port and enter the AT command shown below to restart. Another option is to press the "),r("strong",[t._v("RST")]),t._v(" button on the RAK811 LPWAN Evaluation Board.")])])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("at+set_config"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device:restart\n")])])]),r("rk-img",{attrs:{src:t.$frontmatter.static_root+"/x0fsjpi4xc4hmatdcmyk.jpg",width:"60%","figure-number":"6",caption:"Restarting your Device"}}),t._v(" "),r("p",[t._v("This information means that you have uploaded the Firmware successfully!")]),t._v(" "),r("p",[t._v("If you want to configure your RAK811 LPWAN Evaluation Board using the available "),r("strong",[t._v("AT commands")]),t._v(", check the "),r("RouterLink",{attrs:{to:"/en-us/quick-start/rak811/configuring-your-rak811.html"}},[t._v("Configuring your RAK811 Evaluation Board")]),t._v(" document.")],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);