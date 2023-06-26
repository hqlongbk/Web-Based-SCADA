# Capstone Project: WEB-BASED SCADA 
## Introduction

* Design and Improvement of the filter tank control system.
* Applying MQTT to control and supervision on SCADA Web-based.
  
## Automation plan

- Technology improvement plan and automatic control of the filter tank.
  
- Connect multiple PLC devices (S7-1200 & S7-1500) to increase accuracy and reliability.

![loc](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/741d687f-86bb-4c52-93c5-50ac77291e45)

## Multiple Connection

### System Diagram

![sodo](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ea8f8c4e-273a-45f1-b63a-c40a92eef3eb)

- The devices: PLC S7-1200, Raspberry PI 4, Module 4G.

![image3](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/4ae36428-f4e2-48c0-8dd1-ad208a266838)

- MQTT Broker(CloudMQTT): acts as a go-between for the clients who are sending messages and the subscribers who are receiving those messages.

- Node-RED: The flows created in Node-RED are stored using JSON which can be easily imported and exported for sharing with others.

![image4](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ab800e07-0d4e-43f4-a5aa-7ecd3b55b191)

## Web-based

![project1](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ed51a178-f019-4445-aef3-7a97ebaa11e0)

- Remote device monitoring at an individual level & at an infrastructure level.

- Images and parameters are updated in real time.

