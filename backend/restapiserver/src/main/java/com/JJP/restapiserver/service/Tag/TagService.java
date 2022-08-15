package com.JJP.restapiserver.service.Tag;

import com.JJP.restapiserver.domain.dto.tag.TagResponseDto;
import com.JJP.restapiserver.domain.entity.Tag.Tag;
import org.springframework.http.ResponseEntity;

public interface TagService {

    public ResponseEntity autoCompletion(String keyword);

    public TagResponseDto saveTag(String keyword);

    public boolean existsByTag(String keyword);

    public TagResponseDto getTagByName(String keyword);

}
