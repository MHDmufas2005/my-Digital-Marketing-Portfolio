AOS.init({
    duration: 1000,
    once: true,
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar-menu');

if (hamburger && sidebar) {
    const toggleSidebar = () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleSidebar);
    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSidebar();
        }
    });

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });
}

// Social icons toggle panel
const socialToggle = document.getElementById('social-icon-toggle');
const socialPanel = document.getElementById('social-links-panel');

if (socialToggle && socialPanel) {
    socialToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        socialPanel.style.display = socialPanel.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (event) => {
        if (!socialToggle.contains(event.target) && !socialPanel.contains(event.target)) {
            socialPanel.style.display = 'none';
        }
    });
}
