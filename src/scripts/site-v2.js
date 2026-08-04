(function () {
  "use strict";

  var nav = document.querySelector(".nav-v2");
  var toggle = document.querySelector(".nav-v2__toggle");
  var menu = document.querySelector(".nav-v2__menu");

  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  function updateNav() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  var focusContent = {
    medical: {
      index: "01 — 03",
      title: "Medical image understanding",
      copy: "Learning reliable visual representations for segmentation, recognition and clinically meaningful decision support.",
      primary: "M40 238 C110 210,115 88,192 112 S286 260,350 166 S432 58,486 94",
      secondary: "M40 172 C124 104,178 254,246 184 S370 64,486 214"
    },
    multi: {
      index: "02 — 03",
      title: "Multimodal representation learning",
      copy: "Aligning vision, language and structured clinical signals to build richer and more transferable medical representations.",
      primary: "M40 110 C112 176,148 52,224 142 S336 242,486 116",
      secondary: "M40 246 C124 208,182 88,266 156 S382 232,486 184"
    },
    efficient: {
      index: "03 — 03",
      title: "Efficient & deployable models",
      copy: "Designing lightweight neural systems that preserve accuracy while reducing computation and deployment cost.",
      primary: "M40 220 C136 218,146 104,234 108 S340 186,486 82",
      secondary: "M40 270 C118 174,202 252,284 138 S410 122,486 196"
    }
  };

  var switcher = document.querySelector("[data-focus-switcher]");
  if (switcher) {
    var tabs = Array.prototype.slice.call(switcher.querySelectorAll("[data-focus]"));
    var title = switcher.querySelector("[data-focus-title]");
    var copy = switcher.querySelector("[data-focus-copy]");
    var index = switcher.querySelector("[data-focus-index]");
    var paths = switcher.querySelectorAll(".network-path");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var key = tab.getAttribute("data-focus");
        var data = focusContent[key];
        if (!data) return;

        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-selected", String(active));
        });

        index.textContent = data.index;
        title.textContent = data.title;
        copy.textContent = data.copy;
        if (paths[0]) paths[0].setAttribute("d", data.primary);
        if (paths[1]) paths[1].setAttribute("d", data.secondary);
      });
    });
  }

  var revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries, instance) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.01 });
    // Low threshold on purpose: tall containers (e.g. long article bodies)
    // can never reach a higher visibility share, which would keep them
    // permanently hidden (opacity: 0) even while scrolling.

    Array.prototype.forEach.call(revealItems, function (item) {
      observer.observe(item);
    });
  } else {
    Array.prototype.forEach.call(revealItems, function (item) {
      item.classList.add("is-visible");
    });
  }
}());
