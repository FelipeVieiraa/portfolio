import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../../styles/components/Header/Header.module.scss';

import { animated, useSpring } from 'react-spring';

export default function Home() {

  const [showNav, setShowNav] = useState(false);
  const navNewProps = useSpring({
    height: showNav ? 350 : 0,
    bottom: showNav ? -350 : 350,
    opacity: showNav ? 1 : 0
  });

  function handleOpenNav() {
    setShowNav(!showNav);
  }

  return (
    <header className={styles.headerContainer}>

      <animated.nav style={navNewProps}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfólio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="MyWork"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Oque faço
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Conhecimentos
            </Link>
          </li>
        </ul>
      </animated.nav>

      <div>
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img className={styles.mage} src={'./svg/mage.svg'} alt="Mage icon"/>
          <h1>Felipe Vieira</h1>
        </Link>
      </div>

      <div>
        <button onClick={handleOpenNav}>
          <img src="./svg/menu.svg" alt="Menu"/>
        </button>
      </div>

      <div>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Sobre mim
        </Link>

        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Portfólio
        </Link>

        <Link
          activeClass="active"
          to="MyWork"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Oque faço
        </Link>

        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Conhecimentos
        </Link>

        {/*<button>
          <img src="./svg/sun.svg" alt="Light template"/>
        </button>*/}
      </div>
    </header>
  );
}
  