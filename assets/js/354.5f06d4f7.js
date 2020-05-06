(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{687:function(t,e,o){"use strict";o.r(e);var r=o(19),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"burning-the-bootloader"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#burning-the-bootloader"}},[t._v("#")]),t._v(" Burning the Bootloader")]),t._v(" "),o("p",[t._v("You can burn the bootloader on your RAK7200 by following the steps below:")]),t._v(" "),o("ol",[o("li",[t._v("Download and Install the "),o("a",{attrs:{href:"https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html#overview",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("STM32CubeProgrammer")]),o("OutboundLink")],1),t._v(" Software from STMicroelectronics on your Windows PC.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/wm3z5nau3zpemcfviq0h.png",width:"100%","figure-number":"1",caption:"STM32CubeProg Download Page"}}),t._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[t._v("Plug in the provided Micro-USB cable into the RAK7200 LPWAN Tracker and insert it in your PC. We need to set the RAK7200 first to work in "),o("strong",[t._v("Boot Mode.")]),t._v(" Refer to Figure 2 below and do the following: Hold down the BOOT0 Button, then press the Reset Button for a couple of seconds. Release the Reset and the BOOT0 Button.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/b1horbt3p40hmvnuxqed.jpg",width:"80%","figure-number":"2",caption:"RAK7200 Buttons and USB Interface"}}),t._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[t._v("Open the STM32CubeProgrammer Software and Select UART type.")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/aekfryuujx4mig7hfwua.jpg",width:"100%","figure-number":"3",caption:"STM32CubeProgrammer Interface"}}),t._v(" "),o("ul",[o("li",[t._v("Choose the appropriate port number in the "),o("strong",[t._v("COM Port")]),t._v(" field. Open the "),o("RouterLink",{attrs:{to:"/en-us/quick-start/rak7200/interfacing-with-rak7200.html"}},[t._v("Interfacing with RAK7200")]),t._v(" document to check the appropritate COM Port to be used for the demonstration.")],1),t._v(" "),o("li",[t._v("Set the Baud Rate to 115200, and the Parity to Even as seen in "),o("strong",[t._v("Figure 3")]),t._v(" then Press "),o("strong",[t._v("Connect.")])])]),t._v(" "),o("p",[t._v("If you didn't properly set your RAK7200 device to work in BOOT Mode, you will see the following information in the Log Section of the Software:")]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/pthfpwcme7kv7fk8vdic.jpg",width:"100%","figure-number":"4",caption:"Error - Device not in Boot Mode"}}),t._v(" "),o("ul",[o("li",[t._v("If this happens, go back to the section above and set your RAK7200 device to work in "),o("strong",[t._v("Boot Mode")]),t._v(" again.")]),t._v(" "),o("li",[t._v("If all works well, you will then see the following log:")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/xwcazjqx9mfmqvrr3apr.jpg",width:"100%","figure-number":"5",caption:"Success - Working in Boot Mode"}}),t._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[t._v("Now that you have successfully connected your RAK7200 to the STM32CubeProgrammer Tool, let's burn the Bootloader into the RAK7200.")])]),t._v(" "),o("ul",[o("li",[t._v("Download the Bootloader for the RAK7200 LPWAN Tracker "),o("a",{attrs:{href:"https://downloads.rakwireless.com/en/LoRa/RAK7200-Tracker/Firmware/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("here")]),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v('In the STM32CubeProgrammer, Click the "'),o("strong",[t._v("Erase Chip")]),t._v('" button to erase all the data on RAK7200:')])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/o8jcjqkwzlv5ukqbrpg9.jpg",width:"100%","figure-number":"6",caption:"Erase Chip"}}),t._v(" "),o("ul",[o("li",[t._v('Click "'),o("strong",[t._v("Open File")]),t._v('" and select the correct Bootloader file that you have just downloaded.')])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/f8r7owhtv3psucvhtejc.jpg",width:"100%","figure-number":"7",caption:"Open the Firmware File"}}),t._v(" "),o("ul",[o("li",[t._v('Click the "'),o("strong",[t._v("Download")]),t._v('" Button to start the burning process:')])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/qzhcdcluajgue2hsl7hb.jpg",width:"100%","figure-number":"8",caption:"Uploading the Bootloader"}}),t._v(" "),o("ul",[o("li",[t._v("After a couple of seconds, you will see the following window telling that you have successfully burned the Bootloader to your RAK7200!")])]),t._v(" "),o("rk-img",{attrs:{src:t.$frontmatter.static_root+"/yxjlq9zs9ztlugceqnfd.jpg",width:"100%","figure-number":"9",caption:"Success Upgrade of the Firmware"}}),t._v(" "),o("ul",[o("li",[t._v("“"),o("strong",[t._v("Disconnect")]),t._v("” and close the STM32CubeProgrammer tool.")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);