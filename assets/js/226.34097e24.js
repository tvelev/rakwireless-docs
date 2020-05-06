(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{559:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chirpstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chirpstack"}},[t._v("#")]),t._v(" Chirpstack")]),t._v(" "),a("p",[t._v("It is always a good idea to make an update and upgrade of your packages. In order to do so, run the following commands in the terminal:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n")])])]),a("ol",[a("li",[t._v("After the procedure is completed, we are going to install ChirpStack and its dependencies. To do this first we need to install Git with the command:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Next, we "),a("strong",[t._v("clone")]),t._v(" the "),a("strong",[t._v("RAKwireless Ubuntu")]),t._v(" ChirpStack repository:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/RAKWireless/install_ChirpStack_on_ubuntu.git\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("After the cloning is complete, open the newly created folder with the command:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" install_ChirpStack_on_ubuntu\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Run the installation script:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./install.sh\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("After the installation is completed, check if all went well by executing these commands:")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -f -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -u lora-app-server\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -f -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -u ChirpStack\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("You should see no errors same with the image provided below. Make sure you interrupt the output of the commands above with the key combination “"),a("strong",[t._v("Ctrl+Z")]),t._v("” so you can continue with the configuration process.")])]),t._v(" "),a("rk-img",{attrs:{src:"/assets/images/deployment-guide/amazon-web-service/chirpstack-journal.jpg",width:"100%","figure-number":"1",caption:"ChirpStack Journal Control Output (no errors)"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);