import React, { FC } from "react";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";
import useTyped from "../../hooks/useTyped";
import useLottie from "../../hooks/useLottie";
import { arrowDownLottie } from "./constants";

const strings = ["写写文章。", "吹吹水。", "打打游戏。"];

const Home: FC = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  // const sheepLottieRef = useLottie(sheepLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是朽木白，</p>
          <p>
            一名<i className={styles.tencent}>菜鸟</i> 前端开发，主写{" "}
            <span className={styles.react}>React、Vue</span> 的。
          </p>
          <p>
            偶尔喜欢
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              {/* <div ref={sheepLottieRef} /> */}
              {/* <img src="../../assets/icons/me.png"></img> */}
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
