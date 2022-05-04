import React from "react";
import { BiCheck } from "react-icons/bi";
import "./details.css";
const Doremigames = () => {
    return (
        <ul>
            <li>
                <BiCheck />
                <span>docker-compose 이용해 ec2내에서 배포</span>
            </li>
            <li>
                <BiCheck />
                <span>
                    오픈제플린 활용 claim, minting, auction, sale 컨트랙트 구현
                </span>
            </li>
            <li>
                <BiCheck />
                <span>
                    react-observer-intersection 라이브러리 활용하여 feed게시물
                    무한 스크롤 구현
                </span>
            </li>
            <li>
                <BiCheck />
                <span>계정별(user , artist) 페이지 사용권한 차이</span>
            </li>
            <li>
                <BiCheck />
                <span>rest api 준수하여 클라이언트 요청에 대한 응답 처리</span>
            </li>
            <li>
                <BiCheck />
                <span>
                    mySql 관계설정 활용한 user의 아티스트 follow / 상품 찜하기
                    기능 구현
                </span>
            </li>
            <li>
                <BiCheck />
                <span>Link / Router 설정</span>
            </li>
        </ul>
    );
};

export default Doremigames;
