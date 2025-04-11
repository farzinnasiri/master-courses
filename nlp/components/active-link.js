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

    // Add sidebar toggle button to the header
    const header = document.querySelector('header .max-w-7xl');
    const container = document.querySelector('.container');
    const mainContent = document.querySelector('.content-container');
    const sidebar = document.getElementById('sidebar');
    
    // Create toggle button if it doesn't exist
    if (!document.getElementById('sidebar-toggle')) {
        const toggleButton = document.createElement('button');
        toggleButton.id = 'sidebar-toggle';
        toggleButton.className = 'ml-4 text-white';
        toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        toggleButton.title = 'Toggle sidebar';
        header.appendChild(toggleButton);
        
        // Check localStorage for saved state
        const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        
        // Apply initial state
        if (sidebarCollapsed) {
            sidebar.classList.add('sidebar-collapsed');
            mainContent.classList.add('sidebar-collapsed');
            toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        }
        
        // Add click event
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-collapsed');
            mainContent.classList.toggle('sidebar-collapsed');
            
            // Toggle button icon
            if (sidebar.classList.contains('sidebar-collapsed')) {
                toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
                localStorage.setItem('sidebarCollapsed', 'true');
            } else {
                toggleButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
                localStorage.setItem('sidebarCollapsed', 'false');
            }
        });
    }
});
