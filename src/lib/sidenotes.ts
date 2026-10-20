const WIDE = "(min-width: 1480px)";

// Turns the footnotes of every article matching `selector` into sidenotes:
// in the right margin on wide screens, below the article otherwise.
// Pair with src/styles/sidenotes.css and add the `sidenotes` class to the article.
export function initSidenotes(selector: string) {
  const articles = () => document.querySelectorAll<HTMLElement>(selector);

  function layoutSidenotes() {
    const wide = window.matchMedia(WIDE).matches;

    articles().forEach((article) => {
      const footnotes = article.querySelector<HTMLElement>(".footnotes");
      if (!footnotes) return;
      const items = Array.from(
        footnotes.querySelectorAll<HTMLElement>("ol > li"),
      );

      if (!wide) {
        items.forEach((li) => (li.style.marginTop = ""));
        return;
      }

      items.forEach((li) => (li.style.marginTop = ""));

      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      let cursor = articleTop;

      items.forEach((li) => {
        const ref = article.querySelector<HTMLElement>(
          `sup a[href="#${CSS.escape(li.id)}"]`,
        );
        const refTop = ref
          ? ref.getBoundingClientRect().top + window.scrollY
          : cursor;
        const target = Math.max(refTop, cursor);
        const liTop = li.getBoundingClientRect().top + window.scrollY;
        const delta = target - liTop;
        if (delta > 0) li.style.marginTop = `${delta}px`;
        cursor =
          li.getBoundingClientRect().top + window.scrollY + li.offsetHeight + 12;
      });
    });
  }

  function wireHighlights() {
    articles().forEach((article) => {
      article.querySelectorAll<HTMLElement>(".footnotes ol > li").forEach((li) => {
        const ref = article
          .querySelector<HTMLElement>(`sup a[href="#${CSS.escape(li.id)}"]`)
          ?.closest("sup");
        if (!ref) return;
        const on = () => {
          li.classList.add("sn-active");
          ref.querySelector("a")?.classList.add("sn-active");
        };
        const off = () => {
          li.classList.remove("sn-active");
          ref.querySelector("a")?.classList.remove("sn-active");
        };
        li.addEventListener("mouseenter", on);
        li.addEventListener("mouseleave", off);
        ref.addEventListener("mouseenter", on);
        ref.addEventListener("mouseleave", off);
      });
    });
  }

  function wireBackrefs() {
    articles().forEach((article) => {
      article
        .querySelectorAll<HTMLElement>(".footnotes a[data-footnote-backref]")
        .forEach((backref) => {
          backref.removeAttribute("href");
          backref.setAttribute("role", "button");
          backref.setAttribute("tabindex", "0");
          backref.textContent = "↩︎";

          const li = backref.closest("li");
          const marker = li
            ? article.querySelector<HTMLElement>(`sup a[href="#${CSS.escape(li.id)}"]`)
            : null;
          if (!marker) return;

          const go = (e: Event) => {
            e.preventDefault();
            marker.scrollIntoView({ behavior: "smooth", block: "nearest" });
          };
          backref.addEventListener("click", go);
          backref.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") go(e);
          });
        });
    });
  }

  wireHighlights();
  wireBackrefs();
  layoutSidenotes();
  if (document.fonts?.ready) document.fonts.ready.then(layoutSidenotes);
  window.addEventListener("load", layoutSidenotes);

  let raf = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(layoutSidenotes);
  });
}
