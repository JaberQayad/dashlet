export const Footer = (settings) => `
    <footer class="app-footer" ${settings.footerColor ? `style="color: ${settings.footerColor}"` : ''}>
        <div class="footer-content">
            <span>${settings.footerText || 'Powered by'}</span> <a href="https://github.com/JaberQayad/dashlet" target="_blank">Dashlet</a>
        </div>
    </footer>
`;
