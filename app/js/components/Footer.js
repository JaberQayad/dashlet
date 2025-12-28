export const Footer = (settings) => `
    <footer class="app-footer" ${settings.footerColor ? `style="color: ${settings.footerColor}"` : ''}>
        <div class="footer-content">
            <span>${settings.footerText || 'Powered by Dashlet'}</span>
        </div>
    </footer>
`;
