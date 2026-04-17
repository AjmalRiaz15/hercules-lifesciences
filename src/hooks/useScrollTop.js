import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.preserveScroll) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
}

export default useScrollTop;
