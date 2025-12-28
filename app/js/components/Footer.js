export const Footer = (settings) => `
    <footer class="app-footer" ${settings.footerColor ? `style="color: ${settings.footerColor}"` : ''}>
        <div class="footer-content">
            <span class="footer-text">${settings.footerText || 'Powered by'}</span>
            <a href="https://github.com/JaberQayad/dashlet" target="_blank" class="footer-link">Dashlet</a>
            <span class="footer-version">v1.0.0</span>
        </div>
    </footer>
`;
