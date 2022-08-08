package com.JJP.restapiserver.service.InnerService;

import com.JJP.restapiserver.domain.entity.challenge.Challenge;
import com.JJP.restapiserver.domain.entity.stage.Stage;

public interface InnerService {
    public void completionLogic(Stage stage, Long member_id);
}
