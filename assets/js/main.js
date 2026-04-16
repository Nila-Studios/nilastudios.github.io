/**
 * Shared Header and Footer Loader
 */
document.addEventListener('DOMContentLoaded', function () {
    // Determine the path to the root directory
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    // Get root path from data attribute or default to empty (current dir)
    const rootPath = (headerContainer && headerContainer.getAttribute('data-root')) ||
                     (footerContainer && footerContainer.getAttribute('data-root')) || '';

    // Load Header
    if (headerContainer) {
        fetch(rootPath + 'components/header.html')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load header');
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;
                // Fix links in the injected header to be relative to root
                updateInjectedLinks(headerContainer, rootPath);
                initializeNavigation();
            })
            .catch(error => console.error('Error loading header:', error));
    }

    // Load Footer
    if (footerContainer) {
        fetch(rootPath + 'components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load footer');
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
                updateInjectedLinks(footerContainer, rootPath);
                updateFooterYear();
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});

/**
 * Adjusts absolute-looking paths in injected HTML to use the rootPath
 */
function updateInjectedLinks(container, rootPath) {
    if (!rootPath || rootPath === '/') return;

    const links = container.querySelectorAll('a, img');
    links.forEach(el => {
        const attr = el.tagName === 'A' ? 'href' : 'src';
        const val = el.getAttribute(attr);
        // If the path starts with / and isn't a double // (external)
        if (val && val.startsWith('/') && !val.startsWith('//')) {
            el.setAttribute(attr, rootPath + val.substring(1));
        }
    });
}

function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = !expanded ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }
}

function updateFooterYear() {
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
