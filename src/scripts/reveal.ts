// =========================================================
// 滚动渐入：元素加 data-reveal 即可
// 可选延迟：data-reveal-delay="200"（毫秒）
// =========================================================

function initReveal() {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    // 浏览器不支持时直接显示
    if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target as HTMLElement;
                const delay = el.dataset.revealDelay;
                if (delay) el.style.transitionDelay = `${delay}ms`;
                el.classList.add("is-visible");
                io.unobserve(el);
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
}

initReveal();