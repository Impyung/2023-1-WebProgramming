import { useEffect, useState } from 'react';
import 나루토 from './assets/worldCupImg/p1.jpg';
import 원피스 from './assets/worldCupImg/p12.jpg';
import 닥터슬럼프 from './assets/worldCupImg/p2.jpg';
import 달빛천사 from './assets/worldCupImg/p3.jpg';
import 도라애몽 from './assets/worldCupImg/p4.jpg';
import 둘리 from './assets/worldCupImg/p5.jpg';
import 디지몬 from './assets/worldCupImg/p7.jpg';
import 짱구 from './assets/worldCupImg/p14.jpg';
import 쾌걸근육맨 from './assets/worldCupImg/p15.jpg';
import 포켓몬 from './assets/worldCupImg/p16.jpg';
import 코난 from './assets/worldCupImg/p8.jpg';
import 이누야샤 from './assets/worldCupImg/p13.jpg';
import 심슨 from './assets/worldCupImg/p11.jpg';
import 드래곤볼 from './assets/worldCupImg/p6.jpg';
import 보노보노 from './assets/worldCupImg/p9.jpg';
import 스펀지밥 from './assets/worldCupImg/p10.jpg';
import './Worldcup.css';

function WorldCup() {
  const candidates = [
    { name: '나루토', src: 나루토 },
    { name: '원피스', src: 원피스 },
    { name: '닥터 슬럼프', src: 닥터슬럼프 },
    { name: '달빛천사', src: 달빛천사 },
    { name: '도라애몽', src: 도라애몽 },
    { name: '둘리', src: 둘리 },
    { name: '디지몬 어드밴처', src: 디지몬 },
    { name: '짱구는 못말려', src: 짱구 },
    { name: '쾌걸근육맨', src: 쾌걸근육맨 },
    { name: '포켓몬스터', src: 포켓몬 },
    { name: '명탐정 코난', src: 코난 },
    { name: '이누야샤', src: 이누야샤 },
    { name: '심슨', src: 심슨 },
    { name: '드래곤볼', src: 드래곤볼 },
    { name: '보노보노', src: 보노보노 },
    { name: '스펀지밥(송)', src: 스펀지밥 },
  ];

  const [game, setGame] = useState([]);
  const [round, setRound] = useState(0);
  const [nextGame, setNextGame] = useState([]);
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  useEffect(() => {
    setGame(
      candidates
        .map((c) => {
          return { name: c.name, src: c.src, order: Math.random() };
        })
        .sort((l, r) => {
          return l.order - r.order;
        })
    );
  }, []);

  useEffect(() => {
    if (game.length > 1 && round + 1 > game.length / 2) {
      setGame(nextGame);
      setNextGame([]);
      setRound(0);
    }
  });

  if (game.length === 1) {
    return (
      <div>
        <p>우승</p>
        <img src={game[0].src} /> <p>{game[0].name}</p>
      </div>
    );
  }

  if (game.length === 0 || round + 1 > game.length / 2)
    return <div>로딩중</div>;

  const enlargeImg = (index) => {
    if (selectedImgIndex === null) {
      setSelectedImgIndex(index);
      setTimeout(() => {
        setSelectedImgIndex(null);
        setNextGame((prev) => prev.concat(game[index]));
        setRound((round) => round + 1);
      }, 3000);
    }
  };

  return (
    <div>
      <div id="title">
        <p>
          90년대생 추억의 애니메이션 월드컵{round + 1} / {game.length / 2}{' '}
          <b>{game.length === 2 ? '결승' : game.length + '강'}</b>
        </p>
      </div>
      <div className="imgBor">
        {game[round * 2] && (
          <div>
            <img
              src={game[round * 2].src}
              alt={game[round * 2].name}
              onClick={() => enlargeImg(round * 2)}
              className={selectedImgIndex === round * 2 ? 'selected1' : ''}
            />
            <span className="overlay1">{game[round * 2].name}</span>
          </div>
        )}
        {game[round * 2 + 1] && (
          <div>
            <img
              src={game[round * 2 + 1].src}
              alt={game[round * 2 + 1].name}
              onClick={() => enlargeImg(round * 2 + 1)}
              className={selectedImgIndex === round * 2 + 1 ? 'selected2' : ''}
            />
            <span className="overlay2">{game[round * 2 + 1].name}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorldCup;
