import { useEffect, useState } from "react";
import "./settings.scss";
import ButtonChild from "./ButtonChild";
import { IoMdHome } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import IconSetting from "./IconSetting";
import { useNavigate } from "react-router-dom";
import { easeInOutCubic } from "../../../utils/helpers";
import { AppState } from "../../../store";
import { useSelector } from "react-redux";
import PriorityServerPopup from "../../Popup/PriorityServerPopup";

const ButtonSettings = () => {
  const navigate = useNavigate();
  const isOpen = useSelector((state: AppState) => state.chapterOpen.isOpen);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [isShowPriorityServer, setIsShowPriorityServer] = useState<boolean>(false);

  let lastScrollTop = 0;

  const handleClickToHome = () => {
    navigate("/");
    setIsActive(false);
  };

  const scrollToTop = () => {
    try {
      const targetPosition = 0;
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (startPosition > 1500) {
        const distance = targetPosition - startPosition;
        const duration = 2000;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        };

        window.requestAnimationFrame(step);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log(error);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setIsActive(false);
    lastScrollTop = 0;
    setVisible(false);
  };

  const toggleVisible = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled < lastScrollTop && scrolled >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    lastScrollTop = scrolled;
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("scroll", toggleVisible);
    } else {
      window.removeEventListener("scroll", toggleVisible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div>
      {isShowPriorityServer && <PriorityServerPopup close={() => setIsShowPriorityServer(false)} />}
      <div className={`setting ${isActive && "active"} ${!visible && isOpen && "hidden"}`}>
        <div className="toggle">
          <button
            type="button"
            className="nav-btn btn-default-icon !w-9 !h-9 cursor-pointer outline-none"
            onClick={() => setIsActive(!isActive)}
          >
            <IconSetting />
          </button>
        </div>
        <div className="action-item" style={{ "--i": 0 } as React.CSSProperties}>
          <ButtonChild func={handleClickToHome}>
            <IoMdHome className="rotate-[20deg] text-sky-400 text-lg" />
          </ButtonChild>
        </div>
        <div className="action-item" style={{ "--i": 1 } as React.CSSProperties}>
          <ButtonChild
            func={() => {
              setIsShowPriorityServer(true);
              setIsActive(false);
            }}
          >
            <FaServer className="rotate-[10deg] text-green-700" />
          </ButtonChild>
        </div>
        <div className="action-item" style={{ "--i": 2 } as React.CSSProperties}>
          <ButtonChild func={scrollToTop}>
            <FaLongArrowAltUp className="text-red-600 text-xl" />
          </ButtonChild>
        </div>
      </div>
    </div>
  );
};

export default ButtonSettings;
