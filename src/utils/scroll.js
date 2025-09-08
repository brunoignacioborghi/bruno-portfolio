export function smoothScrollToElement(targetEl, duration = 900) {
  if (!targetEl) return;
  const startY = window.scrollY || window.pageYOffset;
  const rect = targetEl.getBoundingClientRect();
  const targetY = rect.top + startY;

  const startTime = performance.now();
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(t);
    const currentY = startY + (targetY - startY) * eased;
    window.scrollTo(0, currentY);

    if (elapsed < duration) requestAnimationFrame(step);
    else {
      targetEl.setAttribute("tabindex", "-1");
      targetEl.focus({ preventScroll: true });
      setTimeout(() => targetEl.removeAttribute("tabindex"), 300);
    }
  }
  requestAnimationFrame(step);
}

export function handleSmoothAnchorClick(e) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  smoothScrollToElement(target, 900);
}
