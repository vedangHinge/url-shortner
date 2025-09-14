package com.url_shortner.tester;

import com.url_shortner.service.UrlShortnerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class TestRunner implements CommandLineRunner {

    private final UrlShortnerService urlShortnerService;

    @Override
    public void run(String... args) throws Exception {
        String shortCode = "e5dcc4";

        for (int i = 0; i < 100; i++) {
            urlShortnerService.resolveUrl(shortCode);
            Thread.sleep(50); // optional, small delay between requests
        }

        System.out.println("✅ Finished 100 requests");
    }
}
