---
static_root: /assets/images/quick-start-guide/rak4200/1.overview
rak_img: RAK4200-evaluation-board.svg
rak_grp: lora-node
params:
  qlinks1:
    learnMore:
      - name: Projects
        href: https://www.hackster.io/search?q=rak4200&i=projects
      - name: Community
        href: https://forum.rakwireless.com
      - name: Support
        href: mailto:fomi@rakwireless.com
    resources:
      - name: Datasheet
        href: /en-us/datasheet/rak4200/#rak4200-lpwan-module
      - name: RAK4200 Evaluation Board Schematic Diagram
        href: https://downloads.rakwireless.com/LoRa/RAK4200/Hardware-Specification/RAK4200_EVB_Schematic.pdf
      - name: RAK4200 Module Schematic Diagram
        href: https://downloads.rakwireless.com/LoRa/RAK4200/Hardware-Specification/RAK4200_Schematic.pdf
      - name: Reference Schematic Diagram
        href: https://downloads.rakwireless.com/LoRa/RAK4200/Hardware-Specification/RAK4200_Ref_Circuit.pdf
      - name: CE Certification Report
        href: https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/
      - name: Firmware
        href: https://downloads.rakwireless.com/en/LoRa/RAK4200/Firmware/
      - name: Downloads
        href: https://downloads.rakwireless.com/LoRa/RAK4200/
---

# RAK4200 LPWAN Evaluation Board

<rk-img
  :src="`${$frontmatter.static_root}/ebqbxdsu3iazrm9y4jp3.png`"
  width="50%"
  figure-number="1"
  caption="RAK4200 LPWAN Evaluation Board"
/>

## Product Background

**RAK4200 LPWAN Evaluation Board** is a WisBlock product consisting of [RAK4200 LPWAN Module](https://store.rakwireless.com/products/rak4200-lora-module) and RAK5005 WisBase. You can use this development board to access all serial and GPIO ports for easy configuration. RAK4200 includes an STM32L071 MCU and an SX1276 LoRa® chip. It has Ultra-Low Power Consumtion of 1.5uA in sleep mode and high LoRa® output power up to 19dBm max in work mode. The module complies with the LoRaWAN® 1.0.2 protocols. It also supports LoRa® P2P (Point-to-Point) communications. The module is sutiable for various applications that require long-range data acquisition and low power consumption.

<rk-btn
  src="prerequisites.html"
  label="Set up Your RAK4200 LPWAN Evaluation Board"
/>

<rk-quick-links :params="$page.frontmatter.params.qlinks1" />

## Product Features

- LPWAN module for Smart City, Smart Agriculture, Smart Industry
- **I/O ports:** UART/I2C/GPIO
- **Temperature range:** -40°C to +85°C
- **Frequency range:** 863–870MHz (EU) / 902–928MHz (US), ISM and SRD systems
- Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
- **Core:** ARM 32-bit Cortex - M0+ with MPU
- Up to 128KB flash memory with ECC
- 20KB RAM
