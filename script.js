document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); // Toggle active class on hamburger for animation
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = link.getAttribute('href');
            // Check if the target is a valid ID (starts with # and is not just '#')
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate offset for fixed navbar
                    // Get navbar height dynamically
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const offset = navbarHeight + 30; // Navbar height + some extra padding

                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = targetElement.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active'); // Remove active class from hamburger
                    }
                }
            } else {
                // If href is just '#', scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Terminal typing effect for Live System Insights
    const typingCommandElement = document.querySelector('.terminal-line .command.typing-animation');

    if (typingCommandElement) {
        // We'll manage the typing animation purely with CSS now,
        // so no need for JS intervention here beyond ensuring it's present.
        // The blinking cursor and typing animation are handled by CSS @keyframes.
    }

    // Dynamic metric fill for data visualization section
    const metricFills = document.querySelectorAll('.metric-fill');
    metricFills.forEach(fill => {
        // Store original width from inline style (e.g., "99.9%")
        const originalWidth = fill.style.width;
        fill.style.width = '0%'; // Reset to 0 for animation
        setTimeout(() => {
            fill.style.width = originalWidth; // Apply original width to trigger CSS transition
        }, 800); // Delay animation slightly after page load to make it noticeable
    });


    // Initialize AOS library (already included in HTML, but good to note here)
    // AOS.init(); // This call is directly in the HTML, so no need to duplicate here.
});