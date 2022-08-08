package com.JJP.restapiserver.service.challenge;

import com.JJP.restapiserver.domain.dto.stage.StageJoinRequestDto;
import com.JJP.restapiserver.domain.entity.challenge.JoinedChallenge;
import com.JJP.restapiserver.repository.challenge.ChallengeRepository;
import com.JJP.restapiserver.repository.challenge.JoinedChallengeRepository;
import com.JJP.restapiserver.repository.member.MemberRepository;
import com.JJP.restapiserver.service.InnerService.InnerService;
import com.JJP.restapiserver.service.member.MemberService;
import com.JJP.restapiserver.service.stage.StageJoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinedChallengeServiceImpl implements JoinedChallengeService{

    private final ChallengeRepository challengeRepository;

    private final MemberRepository memberRepository;

    private final StageJoinService stageJoinService;

    private final JoinedChallengeRepository joinedChallengeRepository;

    private final InnerService innerService;

    @Override
    public void joinChallenge(Long challenge_id, Long member_id) {
        JoinedChallenge joinedChallenge = JoinedChallenge.builder()
                .challenge(challengeRepository.getById(challenge_id))
                .member(memberRepository.getById(member_id))
                .state(1)
                .build();
        joinedChallengeRepository.save(joinedChallenge);
    }
}
