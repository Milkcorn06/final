## Cài đặt

1. Clone repo:

~~~bash
git clone https://github.com/Milkcorn06/final.git
~~~

2. Di chuyển vào repo:

~~~bash
cd final
~~~

3. Build project:

~~~bash
mvn clean install
~~~

## Chạy ứng dụng

1. Khởi động server:

~~~bash
./mvnw spring-boot:run
~~~

2. API endpoint URL:

~~~
http://localhost:8080
~~~

## Cấu trúc dự án

~~~
final/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/ovftank/image/ovftank/
│       │       ├── config/         # Cấu hình
│       │       ├── controller/     # Xử lý request
│       │       ├── model/          # Định nghĩa dữ liệu
│       │       ├── repository/     # Tương tác db
│       │       ├── service/        # Xử lý logic
│       │       └── OvftankApplication.java
│       └── resources/
│           └── application.properties  # Cấu hình
├── pom.xml                            # Quản lý thư viện
└── .mvn/                             # Maven Wrapper
~~~

## Database Setup

![database](https://github.com/Milkcorn06/final/blob/frontend/.github/database.png)
