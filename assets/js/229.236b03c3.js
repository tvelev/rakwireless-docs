(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{562:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gateway-bridge-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gateway-bridge-setup"}},[t._v("#")]),t._v(" Gateway Bridge Setup")]),t._v(" "),a("p",[t._v("We are going to provide an outline on how to perform the installation. For detailed information you can visit "),a("a",{attrs:{href:"https://www.chirpstack.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chirpstack.io"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("ol",[a("li",[t._v("Run the following commands provided below to update the Ubuntu Repositories.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1CE2AFD36DBCCA00\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb https://artifacts.loraserver.io/packages/3.x/deb stable main"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/loraserver.list\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),a("ul",[a("li",[t._v("This will update the Ubuntu Repositories.")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Proceed with installing the Bridge itself:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lora-gateway-bridge\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Start the Bridge service:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start lora-gateway-bridge\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Check if it is working as it should using the command as shown same with the snippet below:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("journalctl -u lora-gateway-bridge -f -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n")])])]),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/gateway-bridge-journal.jpg",width:"100%","figure-number":"1",caption:"Gateway Bridge Journal Control Output (no errors)"}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);