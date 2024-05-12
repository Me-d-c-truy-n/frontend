package com.crawldata.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailComic {
    String name;
    String author;
    String category;
    String status;
    String url;
    List<Chapter> chapters;
    Integer current;
    Integer total;
}
