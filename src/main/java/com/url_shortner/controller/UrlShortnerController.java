package com.url_shortner.controller;

import com.url_shortner.dto.UrlRequest;
import com.url_shortner.service.UrlShortnerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/url")
@AllArgsConstructor
public class UrlShortnerController {

    private final UrlShortnerService urlShortnerService;

    @PostMapping("/shorten")
    public ResponseEntity<?> shorten(@RequestBody UrlRequest url) {
        String shortCode = urlShortnerService.shortUrl(url.getOriginalUrl());
        String shortUrl = "http://localhost:8080/api/url/" + shortCode;
        return ResponseEntity.ok().body(shortUrl);
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<?> redirectToOriginal(@PathVariable String shortCode) {
        return urlShortnerService.resolveUrl(shortCode)
                .map(originalUrl -> ResponseEntity.status(302).header("Location", originalUrl).build())
                .orElse(ResponseEntity.notFound().build());
    }
}
