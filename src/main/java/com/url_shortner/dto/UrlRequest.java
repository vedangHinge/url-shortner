package com.url_shortner.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class UrlRequest {
    private String originalUrl;
}
