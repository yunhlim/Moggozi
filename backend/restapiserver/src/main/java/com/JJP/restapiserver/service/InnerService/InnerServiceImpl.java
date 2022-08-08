package com.JJP.restapiserver.service.InnerService;

import com.JJP.restapiserver.domain.entity.challenge.Challenge;
import com.JJP.restapiserver.domain.entity.challenge.JoinedChallenge;
import com.JJP.restapiserver.domain.entity.stage.Stage;
import com.JJP.restapiserver.repository.challenge.ChallengeRepository;
import com.JJP.restapiserver.repository.challenge.JoinedChallengeRepository;
import com.JJP.restapiserver.repository.member.MemberRepository;
import com.JJP.restapiserver.repository.stage.StageRepository;
import com.JJP.restapiserver.service.challenge.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InnerServiceImpl implements InnerService{

    private final MemberRepository memberRepository;

    private final StageRepository stageRepository;

    private final ChallengeRepository challengeRepository;

    private final JoinedChallengeRepository joinedChallengeRepository;

    @Transactional
    @Override
    public void completionLogic(Stage stage, Long member_id) {
        Challenge challenge = stage.getChallenge();
        int stageNum = challenge.getStageList().size();
        Optional<JoinedChallenge> joinedChallenge = joinedChallengeRepository.findByChallenge_idAndMember_id(
                challenge.getId(), member_id);
        if(joinedChallenge.isPresent()){
            if(stageNum == stage.getStage_order())
            joinedChallenge.get().setState(2);
        }
        joinedChallenge.get().getMember().addPoint();
    }

}
