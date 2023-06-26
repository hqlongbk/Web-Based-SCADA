# Capstone Project: WEB-BASED SCADA 
## Introduction
* Thiết kế cải tạo hệ thống điều khiển cho bể lọc
* Applying MQTT to control and supervision on SCADA Web-based
## Cải tạo và nâng cấp

- Phương án cải tạo công nghệ và nguyên lý điều khiển tự động hóa bể lắng bể lọc đã xây dựng với mục tiêu giải quyết các nhược điểm công nghệ hiện trạng. Tăng cường giám sát tiến trình và tự động hóa hoàn toàn các khâu điều khiển tại bể lắng, bể lọc.

- Nguyên lý điều khiển khép kín dây chuyền bổ sung thêm các logic liên động điều khiển giữa PLC lắng lọc và PLC hóa chất làm tăng độ chính xác, độ tin cậy vận hành của dây chuyền.

![loc](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/741d687f-86bb-4c52-93c5-50ac77291e45)


## Multiple Connection

### Sơ đồ hệ thống

![sodo](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ea8f8c4e-273a-45f1-b63a-c40a92eef3eb)


Thiết bị sử dụng: PLC S7-1200, Raspberry PI 4, Module 4G

![image3](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/4ae36428-f4e2-48c0-8dd1-ad208a266838)


MQTT Broker: CloudMQTT làm trung gian để kết nối giữa các thiết bị người dùng và các thiết bị phần cứng

Node-RED để phân luồng dữ liệu

![image4](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ab800e07-0d4e-43f4-a5aa-7ecd3b55b191)



## Xây dựng Web-based:

![project1](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/ed51a178-f019-4445-aef3-7a97ebaa11e0)



Hệ thống điều khiển và giám sát từ xa bằng nhiều thiết bị thông minh

Hiển thị các hình ảnh, thông số được cập nhật theo thời gian thực

