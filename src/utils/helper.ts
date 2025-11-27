export const getViewportWidth = () => {
  return (
    window.visualViewport?.width ??
    window.innerWidth ??
    document.documentElement.clientWidth
  );
};
