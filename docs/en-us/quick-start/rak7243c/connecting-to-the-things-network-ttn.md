---
type: page
title: Connecting to The Things Network (TTN)
listed: true
slug: connecting-to-the-things-network--ttn-
---published

The Things Network is about enabling low power devices to use long range [g](https://www.thethingsnetwork.org/docs/gateways/)ateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your LoRaWAN® Gateway to the router in order to access the internet according to the method which has been introduced in the [auto$](/rak7243c-lorawan-developer-gateway/accessing-the-internet) section of this document.
- Second, config your LoRaWAN® Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](/quick-start/rak7243-lorawan-developer-gateway/configuring-the-gateway#server-is-ttn) section.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

$plugin[{
    "type": "image",
    "data": {
        "url": "https:\/\/res.cloudinary.com\/developerhub\/image\/upload\/v1575958914\/-1\/fnb3qqtayustdujbkhmt.jpg",
        "mode": "responsive",
        "width": 1350,
        "height": 634,
        "caption": "**Figure 1:** The Things Network Home Page"
    }
}]$

- Choose Console then Click Gateway.

$plugin[{
    "type": "image",
    "data": {
        "url": "https:\/\/res.cloudinary.com\/developerhub\/image\/upload\/v1575958982\/-1\/yeysczfmxhmlh26j6o28.jpg",
        "mode": "responsive",
        "width": 1350,
        "height": 634,
        "caption": "**Figure 2:** The Things Network Console Page"
    }
}]$

$plugin[{
    "type": "image",
    "data": {
        "url": "https:\/\/res.cloudinary.com\/developerhub\/image\/upload\/v1575959008\/-1\/qkmub7m7hgn0zzoi0cnh.jpg",
        "mode": "responsive",
        "width": 1350,
        "height": 634,
        "caption": "**Figure 3:** Adding a Gateway to TTN"
    }
}]$

- All of your Registered Gateways will be displayed here in this page. Click "register gateway"

$plugin[{
    "type": "image",
    "data": {
        "url": "https:\/\/res.cloudinary.com\/developerhub\/image\/upload\/v1575959055\/-1\/ohve3d6gfqksz1ctk27a.jpg",
        "mode": "responsive",
        "width": 1350,
        "height": 634,
        "caption": "**\n**\n\n**Figure 4:** Registering your Gateway"
    }
}]$

$plugin[{
    "type": "callout",
    "data": {
        "text": "Make sure to select the \"**I'm using the legacy packet forwarder**\" check box.",
        "type": "info",
        "title": "Note:"
    }
}]$

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type "**gateway-version**" in the command line. This must be the same with the LoRaWAN® Gateway's True Gateway ID otherwise you will fail to register your LoRaWAN® Gateway on TTN.
- **Description** - A human readable description of your LoRaWAN® Gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with LoRaWAN® Gateway and the LoRa® Node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map!
- **Antenna Placement** - refers to the location of your antenna whether indoor or outdoor.

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! Your LoRaWAN® Gateway is now connected to the The Things Network (TTN).
