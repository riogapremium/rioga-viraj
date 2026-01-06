  // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function () {
      const tabLinks = document.querySelectorAll('.btn-tab');
      tabLinks.forEach(function (tab) {
        tab.addEventListener('click', function () {
          // Remove active class from all tabs
          tabLinks.forEach(t => t.classList.remove('active'));
          // Add active class to the clicked tab
          this.classList.add('active');
        });
      });
    });

     document.addEventListener('DOMContentLoaded', function () {
      const floatingBar = document.querySelector('.mobile-tab-wrapper');
      const originalOffsetTop = floatingBar.offsetTop;
      window.addEventListener('scroll', () => {
        if (window.scrollY >= originalOffsetTop) {
          floatingBar.classList.add('sticky');
        } else {
          floatingBar.classList.remove('sticky');
        }
      });
    });


     document.addEventListener("DOMContentLoaded", function () {
      const groups = document.querySelectorAll("[data-stagger]");
      const defaultStep = 0.15; // seconds between items
      function prepareGroup(group) {
        const step = parseFloat(group.dataset.staggerStep || defaultStep);
        const items = group.querySelectorAll(".appearText");
        items.forEach((el, idx) => {
          el.style.setProperty("--delay", `${idx * step}s`);
        });
      }
      groups.forEach(prepareGroup);
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(".appearText");
              items.forEach((el) => el.classList.add("is-in"));
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        groups.forEach((g) => io.observe(g));
      } else {
        groups.forEach((g) =>
          g.querySelectorAll(".appearText").forEach((el) => el.classList.add("is-in"))
        );
      }
    });



    Fancybox.bind('[data-fancybox="gallery"]', {
      Hash: false,
      Thumbs: false,
      // compact: false,
      // contentClick: "toggleCover",
      wheel: "slide",
      Toolbar: {
        display: {
          left: [],
          // middle: [],
          right: ["close"],
        },
      },
      Images: {
        Panzoom: {
          panMode: "mousemove",
          mouseMoveFactor: 1.1,
          mouseMoveFriction: 0.12
        },
      },
      //
    });