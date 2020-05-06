(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{493:function(e,a,t){"use strict";t.r(a);var s=t(19),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),t("h3",{attrs:{id:"rak2246-concentrator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rak2246-concentrator"}},[e._v("#")]),e._v(" RAK2246 Concentrator")]),e._v(" "),t("p",[e._v("The concentrator is available with an SPI interface:")]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/datasheet/rak7246g/interfaces/qdr3oj29xkjdfu0a3bys.jpg",width:"80%","figure-number":"5",caption:"RAK2246 Bottom View"}}),e._v(" "),t("h4",{attrs:{id:"sx1308"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sx1308"}},[e._v("#")]),e._v(" SX1308")]),e._v(" "),t("p",[e._v("The RAK2246 includes Semtech’s SX1308, which is a digital baseband chip including a massive digital signal processing engine specifically designed to offer breakthrough gateway capabilities in the worldwide ISM band.")]),e._v(" "),t("p",[e._v("The SX1308 is a smart baseband processor for long range ISM communication. In the receiver part, it receives I and Q digitized bit stream for one or two receivers (SX1257), demodulates these signals using several demodulators, adapting the demodulators settings to the received signal and stores the received demodulated packets in a FIFO to be retrieved from a host system (PC, MCU). In the transmitter part, the packets are modulated using a programmable (G)FSK/LoRa modulator and sent to one transmitter (SX1257). Received packets can be time-stamped using a GPS PPS input.")]),e._v(" "),t("p",[e._v("The SX1308 has an internal control block that receives microcode from the host system (PC, MCU). The microcode is provided by Semtech as a binary file to load into the SX1308 at power-on ("),t("em",[e._v("see Semtech application support for more information).")])]),e._v(" "),t("p",[e._v("The control of the SX1308 by the host system (PC, MCU) is made using a Hardware Abstraction Layer (HAL). The Hardware Abstraction Layer source code is provided by Semtech and can be adapted by the host system developers.")]),e._v(" "),t("p",[e._v("It is highly\nrecommended to utilize the latest HAL as provided by Semtech on "),t("a",{attrs:{href:"https://github.com/Lora-net",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Lora-net"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"block-diagram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-diagram"}},[e._v("#")]),e._v(" Block Diagram")]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/datasheet/rak7246g/interfaces/block-diagram.png",width:"100%","figure-number":"6",caption:"Block Diagram"}}),e._v(" "),t("p",[e._v("The SX1308 digital baseband chip contains 10 programmable reception paths. Those paths have differentiated levels of programmability and allow for different use cases. It is important to understand the differences between those demodulation paths to make the best possible use of the system.")]),e._v(" "),t("h4",{attrs:{id:"if8-lora-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if8-lora-channel"}},[e._v("#")]),e._v(" IF8 LoRa channel")]),e._v(" "),t("p",[e._v("This channel is connected to one SX1257 using any arbitrary intermediate frequency within the allowed range. This channel is LoRa only. The demodulation bandwidth can be configured to be 125, 250 or 500 kHz. The data rate can be configured to any of the LoRa available data rates (SF7 to SF12), but as opposed to the IF0 to IF7 channels, only the configured data rate will be demodulated. This channel is intended to serve as a high speed backhaul link to other gateways or infrastructure equipment. This demodulation path is compatible with the signal transmitted by the SX1272 and SX1276 chip family.")]),e._v(" "),t("h4",{attrs:{id:"if9-g-fsk-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if9-g-fsk-channel"}},[e._v("#")]),e._v(" IF9 (G)FSK channel")]),e._v(" "),t("p",[e._v("The IF9 channel is connected to a (G)FSK demodulator. The channel bandwidth and bit rate can be adjusted. This demodulator offers a very high level of configurability, going well beyond the scope of this document. The demodulator characteristics are essentially the same as the (G)FSK demodulator implemented in the SX1232 and SX1272 Semtech chips. This demodulation path can demodulate any legacy FSK or GFSK formatted signal.")]),e._v(" "),t("h4",{attrs:{id:"if0-to-if7-lora-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if0-to-if7-lora-channels"}},[e._v("#")]),e._v(" IF0 to IF7 LoRa channels")]),e._v(" "),t("p",[e._v("These channels are connected to one SX1257. The channel bandwidth is 125 kHz and cannot be modified or configured. Each channel’s IF frequency can be individually configured. On each of these channels any data rate can be received without prior configuration.")]),e._v(" "),t("p",[e._v("Several packets using different data rates (different SF) may be demodulated simultaneously even on the same channel. Those channels are intended to be used for a massive asynchronous star network of 1000’s of sensor nodes. Each sensor may use a random channel (amongst IF0 to IF7) and a different data rate for any transmission.")]),e._v(" "),t("p",[e._v("Sensors located near the Gateway will typically use the highest possible data rate in the fixed 125 kHz channel bandwidth (e.g. 6 kbit/s) while sensors located far away will use a lower data rate down to 300 bit/s (the minimum LoRa data rate in a 125 kHz channel).")]),e._v(" "),t("p",[e._v("The SX1308 digital baseband chip scans the 8 channels (IF0 to IF7) for preambles of all data rates at all times.")]),e._v(" "),t("p",[e._v("The chip is able to demodulate simultaneously up to 8 packets. Any combination of spreading factor and intermediate frequency for up to 8 packets is possible (e.g. one SF7 packet on IF0, one SF12 packet on IF7 and one SF9 packet on IF1 simultaneously).")]),e._v(" "),t("p",[e._v("The SX1308 can detect simultaneously preambles corresponding to all data rates on all IF0 to IF7 channels. However, it cannot demodulate more than 8 packets simultaneously. This is because the SX1308 architecture separates the preamble detection and signal acquisition task from the demodulation process. The number of simultaneously demodulated packets (in this case 8) is an arbitrary system parameter and may be set to other values for a customer specific circuit.")]),e._v(" "),t("p",[e._v("The unique multi data-rate multi-channel demodulation capacity SF7 to SF12 and of channels IF0 to IF7 allows innovative network architectures to be implemented.")]),e._v(" "),t("rk-img",{attrs:{src:"/assets/images/datasheet/rak7246g/interfaces/jlyqgowwfeidn4k49cy3.png",width:"100%","figure-number":"7",caption:"LoRa Channel"}}),e._v(" "),t("h3",{attrs:{id:"external-module-interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-module-interfaces"}},[e._v("#")]),e._v(" External Module Interfaces")]),e._v(" "),t("h4",{attrs:{id:"spi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[e._v("#")]),e._v(" SPI")]),e._v(" "),t("p",[e._v("The PINs on the connector provide an SPI connection, which allows direct access to the SX1308 SPI interface. This gives the target system the possibility to use existing SPI interfaces to communicate.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("📝 NOTE")]),e._v(" "),t("p",[e._v("After powering up RAK2246, it is required to reset SX1308 via PIN 11.")])]),e._v(" "),t("h4",{attrs:{id:"uart-and-i2c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uart-and-i2c"}},[e._v("#")]),e._v(" UART and I2C")]),e._v(" "),t("p",[e._v("The PINs on the bottom side provide an UART connection and I2C connection, which allows direct access to the GPS module. The 1PPS has been connected to the SX1308 internally.")]),e._v(" "),t("h4",{attrs:{id:"digital-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#digital-ios"}},[e._v("#")]),e._v(" Digital IOs")]),e._v(" "),t("p",[e._v("There are two digital IO PINs, which give the user an interface to reset the GPS module or set it into standby mode.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);