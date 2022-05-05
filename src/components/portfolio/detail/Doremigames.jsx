import React from "react";
import { BiCheck } from "react-icons/bi";
import "./details.css";
const Doremigames = () => {
    return (
        <ul>
            <li>
                <BiCheck />
                <span>NFT 등급별 민팅기능 (ERC-721)</span>
            </li>
            <li>
                <BiCheck />
                <span>유저당 Minting 횟수 제한 (NFT독점 방지)(ERC-721)</span>
            </li>
            <li>
                <BiCheck />
                <span>metadata IPFS에 저장 (pinata)</span>
            </li>
            <li>
                <BiCheck />
                <span>NFT 즉시 구매/판매, 경매, 선물 기능 (ERC-721)</span>
            </li>

            <li>
                <BiCheck />
                <span>
                    랭킹, 미션 달성에 따른 ERC-20토큰 보상 클레임 (ERC-20)
                </span>
            </li>
            <li>
                <BiCheck />
                <span> 컨트랙트-client 간 web3 상호작용</span>
            </li>
            <li>
                <BiCheck />
                <span> admin 권한 관련 db 요청 처리</span>
            </li>
            <li>
                <BiCheck />
                <span>docker-compose 이용해 aws ec2내에서 배포</span>
            </li>
        </ul>
    );
};

export default Doremigames;
