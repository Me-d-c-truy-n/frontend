package com.crawldata.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Category {
    String name;
    List<ComicCategory> comics;
    Integer current;
    Integer totalPage;

}
