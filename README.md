# Capstone Project: WEB-BASED SCADA 
## Introduction
* Thiết kế cải tạo hệ thống điều khiển cho bể lọc
* Applying MQTT to control and supervision on SCADA Web-based
## Cải tạo và nâng cấp
* Phương án cải tạo công nghệ và nguyên lý điều khiển tự động hóa bể lắng bể lọc đã xây dựng với mục tiêu giải quyết các nhược điểm công nghệ hiện trạng. Tăng cường giám sát tiến trình và tự động hóa hoàn toàn các khâu điều khiển tại bể lắng, bể lọc.
* Nguyên lý điều khiển khép kín dây chuyền bổ sung thêm các logic liên động điều khiển giữa PLC lắng lọc và PLC hóa chất làm tăng độ chính xác, độ tin cậy vận hành của dây chuyền.
![image](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/2112c653-aac3-4abb-a703-1a9700dad07f)

## MQTT & Node-RED
* Sơ đồ hệ thống
![image](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/70a2720e-2b02-4136-99f6-87783e32d272)
* thiết bị sử dụng: PLC S7-1200, Raspberry PI 4, Module 4G
![image](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/7ab59e11-9c71-4468-9ba3-a126237f3730)
* MQTT Broker: CloudMQTT làm trung gian để kết nối giữa các thiết bị người dùng và các thiết bị phần cứng
![image](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/3c399dc9-e934-4c83-8a44-e9155618e625)
* Node-RED để phân luồng dữ liệu
## Xây dựng Web-based:
![image](https://github.com/hqlongbk/Web-Based-SCADA/assets/126086908/201646f4-936a-4637-8be8-fffa37e73b6b)
* Hệ thống điều khiển và giám sát từ xa bằng nhiều thiết bị thông minh
* Hiển thị các hình ảnh, thông số được cập nhật theo thời gian thực

