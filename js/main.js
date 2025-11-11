// VinFast Owners North America - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active navigation highlight on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--vinfast-blue)';
                    navLink.style.fontWeight = '600';
                } else {
                    navLink.style.color = '';
                    navLink.style.fontWeight = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Initialize language from saved preference or browser
    const savedLang = localStorage.getItem('vinfast-lang');
    const browserLang = navigator.language.toLowerCase();
    if (savedLang === 'fr' || (!savedLang && browserLang.includes('fr'))) {
        document.body.className = 'fr';
        const buttons = document.querySelectorAll('.lang-toggle button');
        if (buttons.length > 1) {
            buttons[0].classList.remove('active');
            buttons[1].classList.add('active');
        }
    }
});

// Language toggle function (called from onclick)
function setLang(lang) {
    document.body.className = lang === 'fr' ? 'fr' : '';
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    localStorage.setItem('vinfast-lang', lang);
}

// Resource category toggle function
function toggleCategory(button) {
    console.log('Toggle clicked!'); // Debug

    const category = button.parentElement;
    const resourcesList = category.querySelector('.resources-list');
    const toggleIcon = button.querySelector('.toggle-icon');

    console.log('Category:', category);
    console.log('Resources list:', resourcesList);

    // Toggle expanded state
    const isExpanded = category.classList.contains('expanded');

    if (isExpanded) {
        // Collapse
        category.classList.remove('expanded');
        toggleIcon.textContent = '▶';
        resourcesList.style.maxHeight = '0';
        console.log('Collapsed');
    } else {
        // Expand
        category.classList.add('expanded');
        toggleIcon.textContent = '▼';
        // Calculate and set the full height
        const fullHeight = resourcesList.scrollHeight;
        resourcesList.style.maxHeight = fullHeight + 'px';
        console.log('Expanded to:', fullHeight + 'px');
    }
}

// Email obfuscation/de-obfuscation
// Decodes ROT13 encoded emails to prevent scraping
function deobfuscateEmail(element) {
    const encoded = element.getAttribute('data-email');
    if (!encoded) return;

    // ROT13 decode
    const decoded = encoded.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode(
            (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
    });

    // Create clickable mailto link
    element.innerHTML = `<a href="mailto:${decoded}">${decoded}</a>`;
}

// Initialize email deobfuscation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Deobfuscate all emails marked with data-email attribute
    document.querySelectorAll('[data-email]').forEach(deobfuscateEmail);
});
