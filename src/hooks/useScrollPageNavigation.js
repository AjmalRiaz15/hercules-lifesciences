import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routeOrder } from '../data/navigationData';

const edgeThreshold = 12;
const scrollThreshold = 40;
const navigationCooldown = 900;

function useScrollPageNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isCoolingDown = useRef(false);

  useEffect(() => {
    const onWheel = (event) => {
      if (isCoolingDown.current || Math.abs(event.deltaY) < scrollThreshold) {
        return;
      }

      const currentIndex = routeOrder.indexOf(pathname);

      if (currentIndex === -1) {
        return;
      }

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const atTop = scrollTop <= edgeThreshold;
      const atBottom = scrollTop + viewportHeight >= fullHeight - edgeThreshold;

      if (event.deltaY > 0 && atBottom && currentIndex < routeOrder.length - 1) {
        event.preventDefault();
        isCoolingDown.current = true;
        navigate(routeOrder[currentIndex + 1]);
      } else if (event.deltaY < 0 && atTop && currentIndex > 0) {
        event.preventDefault();
        isCoolingDown.current = true;
        navigate(routeOrder[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [navigate, pathname]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      isCoolingDown.current = false;
    }, navigationCooldown);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);
}

export default useScrollPageNavigation;
