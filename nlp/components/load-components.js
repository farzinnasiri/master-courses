document.addEventListener('DOMContentLoaded', function() {
    // Fetch components with absolute paths
    fetch('/Users/farzin/Desktop/Polimi/master-courses/nlp/components/header.html')
        .then(response => response.text())
        .then(html => {
            // Check if header container exists
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                
                // Re-attach mobile menu event listener after header is loaded
                document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
                    document.getElementById('sidebar')?.classList.toggle('-translate-x-full');
                });
                
                // Set up sidebar toggle functionality
                setupSidebarToggle();
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Load sidebar
    fetch('/Users/farzin/Desktop/Polimi/master-courses/nlp/components/sidebar.html')
        .then(response => response.text())
        .then(html => {
            // Check if sidebar container exists
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = html;
                
                // Set active link in sidebar based on current page
                setActiveLink();
                
                // Initialize sidebar state if toggle is available
                initSidebarState();
            }
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
});

// Set active link in sidebar based on current page
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'introduction.html';
    document.querySelectorAll('.nav-list a.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set up sidebar toggle functionality
function setupSidebarToggle() {
    const toggleButton = document.getElementById('sidebar-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.querySelector('.content-container');
            
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
}

// Initialize sidebar state based on localStorage
function initSidebarState() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.content-container');
    const toggleButton = document.getElementById('sidebar-toggle');
    
    if (sidebar && mainContent && toggleButton) {
        // Check localStorage for saved state
        const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        
        // Apply initial state
        if (sidebarCollapsed) {
            sidebar.classList.add('sidebar-collapsed');
            mainContent.classList.add('sidebar-collapsed');
            toggleButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        }
    }
}
