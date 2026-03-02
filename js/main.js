// ============================================
// AVO Website v2 — Main JavaScript
// Association of VinFast Owners North America
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // Dark Mode
    // ========================================

    initDarkMode();

    function initDarkMode() {
        var toggles = document.querySelectorAll('.theme-toggle');
        var stored = localStorage.getItem('avo-theme');

        if (stored === 'dark') {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        } else if (stored === 'light') {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        }

        updateToggleIcon();

        function handleToggleClick() {
            var isDark = document.documentElement.classList.contains('dark-mode');
            var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (isDark || (!isDark && !document.documentElement.classList.contains('light-mode') && systemDark)) {
                document.documentElement.classList.remove('dark-mode');
                document.documentElement.classList.add('light-mode');
                localStorage.setItem('avo-theme', 'light');
            } else {
                document.documentElement.classList.remove('light-mode');
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('avo-theme', 'dark');
            }

            updateToggleIcon();
        }

        toggles.forEach(function (btn) {
            btn.addEventListener('click', handleToggleClick);
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
            if (!localStorage.getItem('avo-theme')) {
                updateToggleIcon();
            }
        });
    }

    function updateToggleIcon() {
        var toggles = document.querySelectorAll('.theme-toggle');
        if (!toggles.length) return;

        var isDark = document.documentElement.classList.contains('dark-mode');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var effectiveDark = isDark || (!document.documentElement.classList.contains('light-mode') && systemDark);

        var label = effectiveDark ? 'Switch to light mode' : 'Switch to dark mode';
        toggles.forEach(function (btn) {
            btn.innerHTML = effectiveDark
                ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
                : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
            btn.setAttribute('aria-label', label);
        });
    }

    // ========================================
    // Navigation — Unified Hamburger Menu
    // ========================================

    var hamburger = document.querySelector('.hamburger-v2');
    var navLinks = document.querySelector('.nav-links-v2');

    // Create backdrop overlay for mobile menu
    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    function openMobileNav() {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        backdrop.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        backdrop.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            if (hamburger.classList.contains('active')) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });

        // Close when clicking backdrop
        backdrop.addEventListener('click', closeMobileNav);

        // Close when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-v2') && !e.target.closest('.nav-backdrop') && navLinks.classList.contains('active')) {
                closeMobileNav();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMobileNav();
                hamburger.focus();
            }
        });
    }

    // Dropdown handling for mobile
    var drops = document.querySelectorAll('.nav-drop');
    drops.forEach(function (drop) {
        var trigger = drop.querySelector('a');
        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            // On mobile/tablet (when hamburger is visible), toggle dropdown
            if (hamburger && window.getComputedStyle(hamburger).display !== 'none') {
                e.preventDefault();
                e.stopPropagation();
                var wasOpen = drop.classList.contains('open');

                // Close all dropdowns
                drops.forEach(function (d) { d.classList.remove('open'); });

                if (!wasOpen) {
                    drop.classList.add('open');
                }
            }
        });

        // Close nav when clicking a dropdown menu item (mobile)
        var menuLinks = drop.querySelectorAll('.nav-drop-menu a');
        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (hamburger && navLinks) {
                    closeMobileNav();
                    drop.classList.remove('open');
                }
            });
        });
    });

    // Close mobile nav when clicking non-dropdown links
    if (navLinks) {
        var directLinks = navLinks.querySelectorAll(':scope > a');
        directLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (hamburger && hamburger.classList.contains('active')) {
                    closeMobileNav();
                }
            });
        });
    }

    // Active page highlighting
    highlightActivePage();

    // ========================================
    // Language Toggle
    // ========================================

    var savedLang = localStorage.getItem('vinfast-lang');
    var browserLang = navigator.language.toLowerCase();
    if (savedLang === 'fr' || (!savedLang && browserLang.includes('fr'))) {
        document.body.classList.add('fr');
        var langBtns = document.querySelectorAll('.lang-switch button');
        if (langBtns.length > 1) {
            langBtns[0].classList.remove('active');
            langBtns[1].classList.add('active');
        }
    }

    // ========================================
    // Scroll Progress Bar
    // ========================================

    (function initScrollProgress() {
        var progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                    progressBar.style.width = pct + '%';
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    })();

    // ========================================
    // Back to Top Button
    // ========================================

    (function initBackToTop() {
        var btn = document.querySelector('.back-to-top');
        if (!btn) return;

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.pageYOffset > 500) {
                        btn.classList.add('visible');
                    } else {
                        btn.classList.remove('visible');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    // ========================================
    // Nav Glass Effect on Scroll
    // ========================================

    (function initNavScrollEffect() {
        var nav = document.querySelector('.nav-v2');
        if (!nav) return;

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.pageYOffset > 10) {
                        nav.classList.add('scrolled');
                    } else {
                        nav.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    })();

    // ========================================
    // Scroll Animations (IntersectionObserver)
    // ========================================

    initScrollAnimations();

    // ========================================
    // Animated Counters
    // ========================================

    animateCounters();

    // ========================================
    // Email Deobfuscation
    // ========================================

    document.querySelectorAll('[data-email]').forEach(deobfuscateEmail);

    // ========================================
    // Helpful Ratings
    // ========================================

    initializeHelpfulRatings();

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    var nav = document.querySelector('.nav-v2');
                    var offset = nav ? nav.offsetHeight : 0;
                    var pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });

                    // Close mobile menu
                    if (hamburger && hamburger.classList.contains('active')) {
                        closeMobileNav();
                    }
                }
            }
        });
    });
});

// ========================================
// Active Page Highlighting
// ========================================

function highlightActivePage() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Map v2 prototype pages to their base names for nav highlighting
    var normalized = currentPage.replace('-v2', '');

    var pageMap = {
        'index.html': 'index.html',
        '': 'index.html',
        'recalls.html': 'recalls.html',
        'considering-vinfast.html': 'considering-vinfast.html',
        'report-issue.html': 'report-issue.html',
        'board.html': 'board.html',
        'documents.html': 'documents.html',
        'meeting-minutes.html': 'meeting-minutes.html',
        'join.html': 'join.html',
        'discord.html': 'index.html',
        'links.html': 'links.html',
        'trip-data.html': 'trip-data.html',
        'petition.html': 'petition.html',
        'open-letter.html': 'open-letter.html',
        'privacy.html': 'privacy.html',
        'disclaimer.html': 'disclaimer.html',
        'bylaws.html': 'bylaws.html',
        'vf8-vf9-user-guide.html': 'vf8-vf9-user-guide.html'
    };

    var target = pageMap[currentPage] || pageMap[normalized];
    if (target) {
        var links = document.querySelectorAll('.nav-links-v2 a, .nav-drop-menu a');
        links.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === target || (href && href.includes(target))) {
                link.classList.add('active');
            }
        });
    }
}

// ========================================
// Language Toggle (called from onclick)
// ========================================

function setLang(lang) {
    if (lang === 'fr') {
        document.body.classList.add('fr');
    } else {
        document.body.classList.remove('fr');
    }
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    localStorage.setItem('vinfast-lang', lang);
}

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    var gridSelectors = '.bento-grid, .community-grid, .stats-grid, .about-grid';

    // Assign staggered delay classes to fade-in elements inside grids
    document.querySelectorAll('.fade-in').forEach(function (el) {
        var parentGrid = el.closest(gridSelectors);
        if (parentGrid) {
            var siblings = Array.prototype.slice.call(parentGrid.querySelectorAll('.fade-in'));
            var index = siblings.indexOf(el);
            if (index !== -1) {
                el.classList.add('fade-delay-' + ((index % 6) + 1));
            }
        }
    });

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Make all elements visible immediately
        document.querySelectorAll('.fade-in').forEach(function (el) {
            el.classList.add('visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(function (el) {
        observer.observe(el);
    });
}

// ========================================
// Animated Counters
// ========================================

function animateCounters() {
    var counters = document.querySelectorAll('.stat-number[data-count]');
    if (counters.length === 0) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        counters.forEach(function (el) {
            var suffix = el.getAttribute('data-suffix') || '';
            el.textContent = el.getAttribute('data-count') + suffix;
            el.classList.add('counter-animate', 'visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                observer.unobserve(el);

                var target = parseInt(el.getAttribute('data-count'), 10);
                var suffix = el.getAttribute('data-suffix') || '';
                if (isNaN(target)) return;

                el.classList.add('counter-animate', 'visible');

                var duration = 1500; // ms
                var startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var elapsed = timestamp - startTime;
                    var progress = Math.min(elapsed / duration, 1);

                    // Ease-out cubic for a smooth deceleration
                    var eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target) + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.textContent = target + suffix;
                    }
                }

                requestAnimationFrame(step);
            }
        });
    }, {
        threshold: 0.3
    });

    counters.forEach(function (el) {
        observer.observe(el);
    });
}

// ========================================
// Email Obfuscation / Deobfuscation
// ========================================

function deobfuscateEmail(element) {
    var encoded = element.getAttribute('data-email');
    if (!encoded) return;

    // ROT13 decode
    var decoded = encoded.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(
            (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
    });

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(decoded)) {
        console.error('Invalid email format after decoding:', encoded);
        return;
    }

    var link = document.createElement('a');
    link.href = 'mailto:' + decoded;
    link.textContent = decoded;
    element.innerHTML = '';
    element.appendChild(link);
}

// ========================================
// Resource Helpful Rating System
// ========================================

function initializeHelpfulRatings() {
    var items = document.querySelectorAll('.resource-item');
    if (items.length === 0) return;

    fetch('data/resource-ratings.json')
        .then(function (response) { return response.json(); })
        .then(function (globalRatings) {
            var userVotes = JSON.parse(localStorage.getItem('user-votes') || '[]');

            items.forEach(function (item) {
                var resourceId = item.getAttribute('data-resource-id');
                if (!resourceId) return;

                var count = globalRatings[resourceId] || 0;
                var countEl = item.querySelector('.helpful-count');
                var btn = item.querySelector('.helpful-btn');

                if (countEl) countEl.textContent = count;
                if (btn && userVotes.includes(resourceId)) btn.classList.add('voted');
            });
        })
        .catch(function () {
            // Fallback to localStorage
            var saved = JSON.parse(localStorage.getItem('resource-ratings') || '{}');
            var userVotes = JSON.parse(localStorage.getItem('user-votes') || '[]');

            items.forEach(function (item) {
                var resourceId = item.getAttribute('data-resource-id');
                if (!resourceId) return;

                var countEl = item.querySelector('.helpful-count');
                var btn = item.querySelector('.helpful-btn');

                if (countEl) countEl.textContent = saved[resourceId] || 0;
                if (btn && userVotes.includes(resourceId)) btn.classList.add('voted');
            });
        });
}

function markHelpful(resourceId) {
    var userVotes = JSON.parse(localStorage.getItem('user-votes') || '[]');
    var pendingVotes = JSON.parse(localStorage.getItem('pending-votes') || '[]');

    if (userVotes.includes(resourceId)) return;

    userVotes.push(resourceId);
    pendingVotes.push({ resourceId: resourceId, timestamp: new Date().toISOString() });

    localStorage.setItem('user-votes', JSON.stringify(userVotes));
    localStorage.setItem('pending-votes', JSON.stringify(pendingVotes));

    var item = document.querySelector('[data-resource-id="' + resourceId + '"]');
    if (item) {
        var countEl = item.querySelector('.helpful-count');
        var btn = item.querySelector('.helpful-btn');
        if (countEl) countEl.textContent = (parseInt(countEl.textContent) || 0) + 1;
        if (btn) btn.classList.add('voted');
    }
}
