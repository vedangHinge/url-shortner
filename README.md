# URL Shortener with Redis Caching

A simple and fast **URL shortener** built with **Java 21+**, **Spring Boot**, **MongoDB**, and **Redis**.  
This project demonstrates how caching can drastically improve response time for frequently accessed URLs.

---

## 🔹 Features

- Shorten long URLs into **6-character codes**
- Redirect short URLs to original URLs
- **Redis caching** for ultra-fast URL resolution
- MongoDB as persistent storage
- Logs request time for Redis vs MongoDB
- Auto-cache MongoDB results in Redis
- Easy to extend for analytics, expiration, or user management

---

## 🏗️ Tech Stack

- **Backend:** Java 21+, Spring Boot 3.x, Spring Data MongoDB, Spring Data Redis
- **Database:** MongoDB (persistent storage)
- **Cache:** Redis (in-memory caching)
- **Build Tool:** Maven / Gradle
- **Testing:** Postman / CommandLineRunner for performance testing

---

## ⚡ Performance Achieved

| Fetch Source  | Avg Time (ms) | Notes |
|---------------|---------------|-------|
| MongoDB       | ~186 ms       | First request or cache miss |
| Redis Cache   | 2–5 ms        | Subsequent requests, extremely fast |
| Spike Values  | 50–900 ms     | Minor spikes due to JVM scheduling or GC |

> ✅ Redis caching achieved a **~40–90x speed improvement** over MongoDB for repeated URL lookups.

---

## 🛠️ API Endpoints

### 1. Shorten URL

- **Endpoint:** `POST /api/url/shorten`
- **Request Body Example:**

```json
{
  "originalUrl": "https://www.example.com"
}
//Response
{
  "shortUrl": "http://localhost:8080/abc123",
  "shortCode": "abc123",
  "originalUrl": "https://www.example.com"
}
From MongoDB: https://www.google.com | Time: 186 ms
⚡ From Redis: https://www.google.com | Time: 3 ms


url-shortener/
│
├── src/
│   ├── main/
│   │   ├── java/com/url_shortner/
│   │   │   ├── config/          # Redis & MongoDB configuration
│   │   │   ├── controller/      # REST Controllers
│   │   │   ├── dto/             # Request/Response DTOs
│   │   │   ├── entities/        # MongoDB entities
│   │   │   ├── repository/      # MongoDB repositories
│   │   │   └── service/         # Business logic
│   │   └── resources/
│   │       ├── application.properties
│   │       └── ...other resources
│
├── .gitignore
├── pom.xml / build.gradle
└── README.md
