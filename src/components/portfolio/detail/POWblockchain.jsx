import React from "react";
import { BiCheck } from "react-icons/bi";
import "./details.css";

const POWblockchain = () => {
    return (
        <ul>
            <li>
                <BiCheck />
                <span>서버(node) 생성시 자동 지갑 생성</span>
            </li>
            <li>
                <BiCheck />
                <span>웹소켓 이용한 node간 연결(p2p)</span>
            </li>
            <li>
                <BiCheck />
                <span>block mining 시 실시간 block 현황 표시</span>
            </li>
            <li>
                <BiCheck />
                <span>
                    타 지갑에 코인 채굴 수량 전달시 transaction pool 보관(UTXO)
                </span>
            </li>
            <li>
                <BiCheck />
                <span>
                    transaction 생성시 transaction pool 보관 코인 실제 전달
                </span>
            </li>
        </ul>
    );
};

export default POWblockchain;
