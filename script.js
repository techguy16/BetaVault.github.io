document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved user preference, first in localStorage, then in system preferences
    const getCurrentTheme = () => localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');

    // Set theme on load
    document.body.setAttribute('data-theme', getCurrentTheme());

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Listen for system theme changes
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const getCurrentTheme = () => localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');

    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Set initial theme
    setTheme(getCurrentTheme());

    // Handle theme toggle click
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const headerControls = document.querySelector('.header-controls');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;
    const menuLinks = document.querySelectorAll('nav a');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        headerControls.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update ARIA attributes
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    };

    // Handle menu toggle
    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (headerControls.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && headerControls.classList.contains('active')) {
                toggleMenu();
            }
        }, 250);
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && headerControls.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Prevent body scroll when menu is open on iOS
    document.body.addEventListener('touchmove', (e) => {
        if (body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }, { passive: false });
});