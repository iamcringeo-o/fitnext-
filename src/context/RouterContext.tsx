import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {}
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  // Normalize pathname: ensure it has leading slash, lowercase, strip trailing slash except for root
  const normalizePath = (p: string) => {
    if (!p || p === '/') return '/';
    let clean = p.startsWith('/') ? p : `/${p}`;
    clean = clean.toLowerCase();
    if (clean.length > 1 && clean.endsWith('/')) {
      clean = clean.slice(0, -1);
    }
    return clean;
  };

  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial load hash scroll if present
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    // Check if it's an on-page hash link e.g. #warm-ups
    if (to.startsWith('#')) {
      const id = to.slice(1);
      const element = document.getElementById(id) || document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', to);
      }
      return;
    }

    // If it has a path and hash e.g. /beginner-workout-guide#why-warmups-matter
    const [targetPath, hash] = to.split('#');
    const normalized = normalizePath(targetPath);

    if (normalized !== path) {
      window.history.pushState({}, '', to);
      setPath(normalized);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (hash) {
      window.history.pushState({}, '', to);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export function Link({ to, className = '', activeClassName = '', children, onClick, ...props }: LinkProps) {
  const { path, navigate } = useRouter();
  const isActive = path === to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If user clicked with meta/ctrl key, allow browser default new-tab behavior
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
