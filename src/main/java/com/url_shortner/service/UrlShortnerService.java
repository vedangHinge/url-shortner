package com.url_shortner.service;

import com.url_shortner.config.RedisConfig;
import com.url_shortner.entites.UrlMapping;
import com.url_shortner.repositary.UrlMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UrlShortnerService {
    private final UrlMappingRepository repository;
    private final StringRedisTemplate redisTemplate;

    // Generate short URL
    public String shortUrl(String originalUrl) {
        String shortCode = generateShortUrl();
        UrlMapping urlMapping = new UrlMapping();
        urlMapping.setId(shortCode);
        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setCreatedAt(System.currentTimeMillis());
        repository.save(urlMapping);

        // Store in Redis cache
        redisTemplate.opsForValue().set(shortCode, originalUrl);
        return shortCode;
    }

    public Optional<String> resolveUrl(String shortCode) {
        long start = System.nanoTime();

        // Check in Redis
        String cachedUrl = redisTemplate.opsForValue().get(shortCode);
        if (cachedUrl != null) {
            long end = System.nanoTime();
            System.out.println("⚡ From Redis: " + cachedUrl + " | Time: " + (end - start) / 1_000_000 + " ms");
            return Optional.of(cachedUrl);
        }

        // Fallback to MongoDB
        long dbStart = System.nanoTime();
        Optional<String> result = repository.findById(shortCode)
                .map(mapping -> mapping.getOriginalUrl());
        long dbEnd = System.nanoTime();

        System.out.println("🐢 From MongoDB: " + result.orElse("NOT FOUND") + " | Time: " + (dbEnd - dbStart) / 1_000_000 + " ms");

        // Cache in Redis if found
        result.ifPresent(value -> redisTemplate.opsForValue().set(shortCode, value));

        return result;
    }

    private String generateShortUrl() {
        return UUID.randomUUID().toString().substring(0, 6);
    }
}
