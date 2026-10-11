(function () {
  'use strict';

  var list = document.getElementById('publication-list');
  var controls = document.querySelector('[data-publication-controls]');

  if (list && controls) {
    var papers = Array.from(list.querySelectorAll('[data-publication]'));
    var buttons = Array.from(controls.querySelectorAll('[data-publication-view]'));
    var count = controls.querySelector('[data-publication-count]');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealObserver = null;

    if (!reduceMotion && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .08 });
    }

    function setPublicationView(view) {
      var visibleCount = 0;

      papers.forEach(function (paper) {
        paper.hidden = view === 'selected' && paper.getAttribute('data-selected') !== 'true';
        if (!paper.hidden) {
          visibleCount += 1;
        }
        if (revealObserver) {
          revealObserver.unobserve(paper);
          paper.classList.remove('is-revealed');
          if (!paper.hidden) {
            revealObserver.observe(paper);
          }
        }
      });

      buttons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-publication-view') === view));
      });
      list.setAttribute('data-view', view);
      count.textContent = visibleCount + (view === 'selected' ? ' selected papers' : ' papers');
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var view = button.getAttribute('data-publication-view');
        if (list.getAttribute('data-view') !== view) {
          setPublicationView(view);
        }
      });
    });

    setPublicationView('selected');
    controls.hidden = false;
  }

  var progress = document.querySelector('[data-reading-progress]');
  if (progress) {
    var progressPending = false;

    function updateReadingProgress() {
      var root = document.documentElement;
      var scrollableHeight = Math.max(0, root.scrollHeight - root.clientHeight);
      var fraction = scrollableHeight ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
      progress.style.transform = 'scaleX(' + fraction + ')';
      progressPending = false;
    }

    function scheduleProgressUpdate() {
      if (!progressPending) {
        progressPending = true;
        window.requestAnimationFrame(updateReadingProgress);
      }
    }

    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true });
    window.addEventListener('resize', scheduleProgressUpdate);
    window.addEventListener('load', scheduleProgressUpdate);
    if (list) {
      list.addEventListener('click', scheduleProgressUpdate);
    }
    if (controls) {
      controls.addEventListener('click', scheduleProgressUpdate);
    }
    scheduleProgressUpdate();
  }
})();
