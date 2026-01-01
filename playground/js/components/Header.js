export const Header = (settings) => `
    <header class="app-header">
        <div class="brand">
            <h1 class="logo">${settings.appTitle || 'Dashlet'}</h1>
            <p class="app-desc">${settings.greeting || ''}</p>
        </div>

        ${settings.searchEnabled ? `
        <div class="search-container">
            <input type="text" id="app-search" class="app-search" placeholder="Search..." aria-label="Search">
        </div>
        ` : ''}
        
        <div class="controls-right">
            <div class="controls">
                <div class="sort-selector" title="Sort By">
                    <span class="material-symbols-rounded">sort</span>
                    <select id="select-sort">
                        <option value="manual" ${settings.sortBy === 'manual' ? 'selected' : ''}>Manual</option>
                        <option value="name" ${settings.sortBy === 'name' ? 'selected' : ''}>Name</option>
                        <option value="description" ${settings.sortBy === 'description' ? 'selected' : ''}>Description</option>
                        <option value="url" ${settings.sortBy === 'url' ? 'selected' : ''}>URL</option>
                    </select>
                </div>
                <button class="icon-btn" id="btn-layout" title="Toggle Layout">
                    <span class="material-symbols-rounded">${settings.layout === 'list' ? 'grid_view' : 'view_list'}</span>
                </button>
                <button class="icon-btn" id="btn-settings" title="Settings">
                    <span class="material-symbols-rounded">settings</span>
                </button>
            </div>
        </div>
    </header>
`;
