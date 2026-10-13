// =========================================================
// 数字递增动画
// 用法：<span data-count="250" data-suffix="+" data-final="250+">0</span>
// =========================================================

function animate(el: HTMLElement) {
    const to = Number(el.dataset.count ?? 0);
    const suffix = el.dataset.suffix ?? "";
    const final = el.dataset.final ?? `${to}${suffix}`;
    const duration = 1800;
    const start = performance.now();

    function frame(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = `${Math.round(to * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = final;
    }
    requestAnimationFrame(frame);
}

function initCountUp() {
    const els = document.querySelectorAll<HTMLElement>("[data-count]");
    if (!els.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
        els.forEach((el) => (el.textContent = el.dataset.final ?? el.dataset.count ?? ""));
        return;
    }

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animate(entry.target as HTMLElement);
                io.unobserve(entry.target);
            });
        },
        { threshold: 0.5 }
    );

    els.forEach((el) => io.observe(el));
}

initCountUp();