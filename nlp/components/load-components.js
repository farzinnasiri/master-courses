document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            // Re-attach mobile menu event listener after header is loaded
            document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
                document.getElementById('sidebar')?.classList.toggle('-translate-x-full');
            });
        });

    // Load sidebar
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar-container').innerHTML = html;
            
            // Set active link in sidebar based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'introduction.html';
            document.querySelectorAll('.nav-list a.nav-link').forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
});
