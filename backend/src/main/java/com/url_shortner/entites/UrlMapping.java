package com.url_shortner.entites;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="url_mappings")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UrlMapping {
    @Id
    private String id;
    private String originalUrl;
    private Long createdAt;
}
