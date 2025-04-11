document.addEventListener('DOMContentLoaded', function() {
    // Set active link in sidebar based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'introduction.html';
    document.querySelectorAll('.nav-list a.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Mobile menu functionality
    document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('-translate-x-full');
    });
});
