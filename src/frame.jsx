import './frame.css';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Calendar() {
  const load = () => {
    const visible = document.querySelector('.project-menu');
    const isDisplayed = visible.style.display !== 'none';

    gsap.to('.calendar', 0.4, {
      opacity: isDisplayed ? 1 : 0.2,
    });

    gsap.to(visible, 0.4, {
      opacity: isDisplayed ? 0 : 1,
      display: isDisplayed ? 'none' : 'block',
    });
  };

  const cl = () => {
    const invisible = document.querySelector('.project-menu');
    const isInvisible = invisible.style.display === 'none';

    gsap.to('.calendar', 0.4, {
      opacity: isInvisible ? 0.2 : 1,
    });

    gsap.to(invisible, 0.4, {
      opacity: isInvisible ? 1 : 0,
      display: isInvisible ? 'block' : 'none',
    });
  };

  return (
    <div className="Main">
      <header>
        <div className="btnOutline">
          <div id="menuBtn" onClick={load}>
            <img
              className="hamburger"
              src="./src/assets/icons/menu.svg"
              alt="burger"
            />
          </div>
        </div>
        <div className="header__contents">
          <div className="header__contents__detail">이름자리</div>
        </div>
      </header>

      <menu className="project-menu">
        <div className="menu__contents">
          <div className="menuBtn__outline">
            <div
              id="menuClBtn"
              className="material-symbols-outlined"
              onClick={cl}
            >
              <img
                className="close"
                src="./src/assets/icons/close.svg"
                alt="close"
              />
            </div>
          </div>
          <ul className="menu__ul">
            <h1 className="menu">프로젝트 메뉴</h1>
            <li className="menu__li">
              <a href="./calendar.html">학사일정</a>
            </li>
            <li className="menu__li">
              <a href="./weather.html">날씨</a>
            </li>
            <li className="menu__li">
              <a href="./subway.html">지하철</a>
            </li>
          </ul>
        </div>
      </menu>

      <footer className="footer">
        <div className="inner">
          <div className="useAPI">
            <p>API</p>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div className="GitHub">
            <p>팀원 깃허브 주소</p>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Calendar;
