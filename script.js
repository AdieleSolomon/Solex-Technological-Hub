function flattenCurriculum() {
  if (typeof curriculum === "undefined") {
    return [];
  }

  const classes = [];

  curriculum.forEach((phase) => {
    phase.classes.forEach((course) => {
      classes.push({
        ...course,
        phase: phase.phase,
        phaseTitle: phase.phaseTitle,
        phaseDuration: phase.duration,
        phaseBackground: getPhaseGradient(phase.phase),
      });
    });
  });

  return classes;
}

let revealObserver;

function observeRevealTargets(elements) {
  if (!elements.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function initializeRevealAnimations() {
  observeRevealTargets([...document.querySelectorAll("[data-reveal]")]);
}

function initializeMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");

  if (!navToggle || !navPanel) return;

  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navPanel.classList.toggle("is-open");
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

function initializeSmoothScrolling() {
  const inPageLinks = document.querySelectorAll('a[href*="#"]');

  inPageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href, window.location.href);
      const isSamePath = url.pathname === window.location.pathname;
      const targetId = url.hash.replace("#", "");

      if (!isSamePath || !targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        history.replaceState(null, "", `#${targetId}`);
      } catch (error) {
        // Ignore history API failures on restrictive file-based previews.
      }
    });
  });
}

function initializeScrollSpy() {
  if (!("IntersectionObserver" in window)) return;

  const pageLinks = [...document.querySelectorAll(".nav-link")].filter((link) => {
    const url = new URL(link.href, window.location.href);
    return url.pathname === window.location.pathname && url.hash;
  });

  const sections = pageLinks
    .map((link) => {
      const id = new URL(link.href, window.location.href).hash.replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (!sections.length) return;

  const linkById = new Map(
    pageLinks.map((link) => [
      new URL(link.href, window.location.href).hash.replace("#", ""),
      link,
    ]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const currentId = entry.target.id;
        pageLinks.forEach((link) => link.classList.remove("active"));
        if (linkById.has(currentId)) {
          linkById.get(currentId).classList.add("active");
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-15% 0px -35% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function animateCounters() {
  const counters = [...document.querySelectorAll(".stat-number[data-target]")];
  if (!counters.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    counters.forEach((counter) => {
      counter.textContent = `${counter.dataset.target}${counter.dataset.suffix || ""}`;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target || 0);
        const suffix = counter.dataset.suffix || "";
        const duration = 900;
        const start = performance.now();

        const frame = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const value = Math.round(progress * target);
          counter.textContent = `${value}${suffix}`;

          if (progress < 1) {
            window.requestAnimationFrame(frame);
          }
        };

        window.requestAnimationFrame(frame);
        observer.unobserve(counter);
      });
    },
    { threshold: 0.6 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initializeFAQ() {
  const faqItems = [...document.querySelectorAll(".faq-item")];
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("is-open");
        const otherButton = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");
        if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        if (otherAnswer) otherAnswer.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });
}

function initializeSampleCourses() {
  const samplesGrid = document.getElementById("samplesGrid");
  if (!samplesGrid || typeof getSampleCourses !== "function") return;

  const sampleCourses = getSampleCourses(6);

  samplesGrid.innerHTML = sampleCourses
    .map(
      (course) => `
        <article class="course-card" data-reveal>
          <div class="course-card-header" style="background: ${course.phaseBackground};">
            <div class="course-label-row">
              <p class="course-kicker">Phase ${course.phase}</p>
              <p class="course-number">Class ${course.classNumber}</p>
            </div>
            <h3 class="course-card-title">${course.title}</h3>
          </div>
          <div class="course-card-body">
            <p class="course-card-summary">${course.topics.slice(0, 3).join(" / ")}</p>
            <div class="course-card-meta">
              <span class="meta-pill">${course.duration}</span>
              <span class="meta-pill">${course.learningObjectives.length} objectives</span>
              <span class="meta-pill">${course.phaseTitle}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  observeRevealTargets([...samplesGrid.querySelectorAll("[data-reveal]")]);
}

function initializeCoursesPage() {
  const coursesList = document.getElementById("coursesList");
  if (!coursesList) return;

  const allClasses = flattenCurriculum();
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const resultsCount = document.getElementById("resultsCount");
  const resetFiltersButton = document.getElementById("resetFilters");
  const phaseFilters = [...document.querySelectorAll(".phase-filter")];
  const allFilter = phaseFilters.find((filter) => filter.dataset.phase === "all");

  const getSelectedPhases = () =>
    phaseFilters
      .filter((filter) => filter.dataset.phase !== "all" && filter.checked)
      .map((filter) => Number(filter.dataset.phase));

  const syncFilters = (changedFilter) => {
    if (!allFilter) return;

    if (changedFilter && changedFilter.dataset.phase === "all" && changedFilter.checked) {
      phaseFilters.forEach((filter) => {
        if (filter !== allFilter) filter.checked = false;
      });
      return;
    }

    if (changedFilter && changedFilter.dataset.phase !== "all" && changedFilter.checked) {
      allFilter.checked = false;
    }

    const selectedPhases = getSelectedPhases();
    if (!selectedPhases.length) {
      allFilter.checked = true;
    }
  };

  const renderCourses = (courses) => {
    resultsCount.textContent = String(courses.length);

    if (!courses.length) {
      coursesList.innerHTML = `
        <div class="empty-state">
          <h3>No matching classes found</h3>
          <p>Try a different search term or reset the phase filters.</p>
        </div>
      `;
      return;
    }

    coursesList.innerHTML = courses
      .map(
        (course) => `
          <details class="course-list-item" data-reveal>
            <summary>
              <div class="course-item-header" style="background: ${course.phaseBackground};">
                <div class="course-number-large">${course.classNumber}</div>
                <div class="course-phase-badge">Phase ${course.phase}</div>
              </div>
              <div class="course-item-body">
                <div class="course-item-info">
                  <p class="course-kicker">${course.phaseTitle}</p>
                  <h3 class="course-item-title">${course.title}</h3>
                  <p class="course-item-topics">${course.topics.slice(0, 3).join(" / ")}</p>
                  <div class="course-item-meta">
                    <span class="meta-pill">${course.duration}</span>
                    <span class="meta-pill">${course.resources.length} resources</span>
                    <span class="meta-pill">${course.learningObjectives.length} objectives</span>
                  </div>
                </div>
                <div class="course-item-action">
                  <span class="summary-pill">Expand outline</span>
                </div>
              </div>
            </summary>

            <div class="course-item-expanded">
              <div class="course-expanded-grid">
                <article class="expanded-card">
                  <h3>Topics</h3>
                  <ul class="course-topic-list">
                    ${course.topics.map((topic) => `<li>${topic}</li>`).join("")}
                  </ul>
                </article>

                <article class="expanded-card">
                  <h3>Learning Objectives</h3>
                  <ul class="course-objectives">
                    ${course.learningObjectives
                      .map((objective) => `<li>${objective}</li>`)
                      .join("")}
                  </ul>
                </article>

                <article class="expanded-card">
                  <h3>Resources</h3>
                  <ul class="resource-list">
                    ${course.resources.map((resource) => `<li>${resource}</li>`).join("")}
                  </ul>
                </article>
              </div>
            </div>
          </details>
        `,
      )
      .join("");

    observeRevealTargets([...coursesList.querySelectorAll("[data-reveal]")]);
  };

  const updateDisplay = () => {
    const query = searchInput?.value.trim().toLowerCase() || "";
    const selectedPhases = allFilter?.checked ? [] : getSelectedPhases();
    const sortValue = sortSelect?.value || "class-asc";

    let visibleCourses = allClasses.filter((course) => {
      const matchesPhase = !selectedPhases.length || selectedPhases.includes(course.phase);
      const haystack = [
        course.title,
        course.phaseTitle,
        course.topics.join(" "),
        course.learningObjectives.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesPhase && matchesQuery;
    });

    switch (sortValue) {
      case "class-desc":
        visibleCourses.sort((a, b) => b.classNumber - a.classNumber);
        break;
      case "title":
        visibleCourses.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "phase":
        visibleCourses.sort((a, b) => a.phase - b.phase || a.classNumber - b.classNumber);
        break;
      default:
        visibleCourses.sort((a, b) => a.classNumber - b.classNumber);
        break;
    }

    renderCourses(visibleCourses);
  };

  phaseFilters.forEach((filter) => {
    filter.addEventListener("change", () => {
      syncFilters(filter);
      updateDisplay();
    });
  });

  searchInput?.addEventListener("input", updateDisplay);
  sortSelect?.addEventListener("change", updateDisplay);

  resetFiltersButton?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "class-asc";

    phaseFilters.forEach((filter) => {
      filter.checked = filter.dataset.phase === "all";
    });

    updateDisplay();
  });

  updateDisplay();
}

function initializeCurrentYear() {
  document.querySelectorAll("#currentYear").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeMobileNavigation();
  initializeSmoothScrolling();
  initializeScrollSpy();
  initializeRevealAnimations();
  animateCounters();
  initializeFAQ();
  initializeSampleCourses();
  initializeCoursesPage();
  initializeCurrentYear();
});
