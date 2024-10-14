// app.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = window.data.sections;
    const generatedContentContainer = document.getElementById('generated-content');

    if (!generatedContentContainer) {
        console.error("Le div avec l'id 'generated-content' n'a pas été trouvé.");
        return;
    }

    createNavigation(sections);
    createContent(sections, generatedContentContainer);
});

function createNavigation(sections) {
    const navbarNav = document.querySelector('.navbar-nav');
    sections.forEach((section) => {
        const navItem = createElement('li', { class: 'nav-item' });
        navItem.innerHTML = `<a class="nav-link" href="#${section.id}" aria-label="${section.label}">${section.title}</a>`;
        navbarNav.appendChild(navItem);
    });
}

function createContent(sections, container) {
    sections.forEach((section, sectionIndex) => {
        const sectionElement = createSection(section, sectionIndex);
        container.appendChild(sectionElement);
    });
}

function createSection(section, sectionIndex) {
    const sectionElement = createElement('section', { id: section.id, class: 'mb-5 card' });
    const sectionBody = createElement('div', { class: 'card-body' });
    sectionElement.appendChild(sectionBody);

    sectionBody.appendChild(createSectionTitle(section.title, sectionIndex));

    if (section.description) {
        sectionBody.appendChild(createDescription(section.description));
    }

    if (section.content && section.content.description) {
        sectionBody.appendChild(createContentDescription(section.content));
    } else if (Array.isArray(section.content)) {
        createSectionContent(section, sectionBody, sectionIndex);
    }

    return sectionElement;
}

function createSectionTitle(title, index) {
    const h2 = createElement('h2', { class: 'card-title mb-4', tabindex: '0' });
    h2.textContent = `${index + 1}. ${title}`;
    return h2;
}

function createDescription(description) {
    const p = createElement('p', { class: 'card-text mb-4' });
    p.innerHTML = description;  // Utiliser innerHTML pour préserver le HTML
    return p;
}

function createContentDescription(content) {
    const p = createElement('p', { class: 'card-text' });
    p.appendChild(createStarRating(content.note));
    p.insertAdjacentHTML('beforeend', ` ${content.description}`);  // Utiliser insertAdjacentHTML pour préserver le HTML
    return p;
}

function createSectionContent(section, sectionBody, sectionIndex) {
    if (section.table) {
        createTableContent(section, sectionBody);
    } else {
        createListContent(section, sectionBody, sectionIndex);
    }
}

function createTableContent(section, sectionBody) {
    if (!section.table) {
        createListContent(section, sectionBody);
        return;
    }

    // Créer un conteneur div pour le tableau avec défilement horizontal sur petits écrans
    const tableContainer = createElement('div', { class: 'table-responsive' });
    
    const table = createElement('table', { class: 'table table-striped table-hover' });
    const thead = createElement('thead');
    const tbody = createElement('tbody');
    
    // Déterminer les colonnes en fonction des clés présentes dans les données
    const columns = new Set();
    section.content.forEach(item => {
        Object.keys(item).forEach(key => columns.add(key));
    });
    
    // Filtrer les colonnes cachées
    const hiddenColumns = section.hiddenColumns || [];
    const visibleColumns = Array.from(columns).filter(col => !hiddenColumns.includes(col));
    
    // Définir l'ordre des colonnes
    const orderedColumns = ['title', 
        ...visibleColumns.filter(col => !['title', 'note', 'result'].includes(col)), 
        'note'
    ].filter(col => visibleColumns.includes(col));

    // Ajouter 'result' à la fin si elle est visible
    if (visibleColumns.includes('result')) {
        orderedColumns.push('result');
    }
    
    // Créer l'en-tête du tableau
    const headerRow = createElement('tr');
    orderedColumns.forEach(column => {
        const th = createElement('th', { scope: 'col' });
        th.textContent = column.charAt(0).toUpperCase() + column.slice(1); // Capitalize
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    
    // Créer les lignes du tableau
    let itemCounter = 1;
    section.content.forEach(item => {
        const row = createElement('tr');
        
        orderedColumns.forEach(column => {
            const cell = createElement('td');
            
            switch(column) {
                case 'result':
                    if (item.result !== undefined) {
                        cell.appendChild(createResultIcon(item.result));
                    }
                    break;
                case 'title':
                    let titleContent = section.numbered ? `${itemCounter}. ` : '';
                    if (item.url) {
                        const link = createElement('a', { href: item.url, target: '_blank' });
                        link.textContent = titleContent + (item.title || 'Sans titre');
                        cell.appendChild(link);
                    } else {
                        cell.appendChild(document.createTextNode(titleContent + (item.title || 'Sans titre')));
                    }
                    itemCounter++;
                    break;
                case 'note':
                    if (item.note !== undefined) {
                        cell.appendChild(createStarRating(item.note));
                    }
                    break;
                default:
                    if (item[column] !== undefined) {
                        cell.innerHTML = item[column];
                    }
            }
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    sectionBody.appendChild(tableContainer);
}

function createListContent(section, sectionBody, sectionIndex) {
    let currentCategory = null;
    let h3Counter = 1;
    let itemCounter = 1;

    section.content.forEach(item => {
        if (item.category && item.category !== currentCategory) {
            currentCategory = item.category;
            sectionBody.appendChild(createSubsectionTitle(sectionIndex, h3Counter++, item.category));
            itemCounter = 1;
        }

        sectionBody.appendChild(createContentItem(item, section.numbered, itemCounter++));
    });
}

function createSubsectionTitle(sectionIndex, h3Counter, category) {
    const h3 = createElement('h3', { class: 'mt-4 mb-3' });
    h3.textContent = `${sectionIndex + 1}.${h3Counter} ${getCategoryTitle(category)}`;
    return h3;
}

function createContentItem(item, numbered, counter) {
    const contentItem = createElement('div', { class: 'mb-3' });
    
    const titleParagraph = createElement('p');
    const strongElement = createElement('strong');
    
    if (numbered) {
        strongElement.textContent = `${counter}. `;
    }
    
    if (item.result !== undefined) {
        strongElement.appendChild(createResultIcon(item.result));
        strongElement.appendChild(document.createTextNode(' ')); // Ajoute un espace après l'icône
    }
    
    if (item.url) {
        const link = createElement('a', { href: item.url, target: '_blank' });
        link.textContent = item.title || 'Sans titre';
        strongElement.appendChild(link);
    } else {
        strongElement.appendChild(document.createTextNode(item.title || 'Sans titre'));
    }
    
    titleParagraph.appendChild(strongElement);
    titleParagraph.appendChild(createStarRating(item.note));
    
    const descriptionParagraph = createElement('p');
    descriptionParagraph.innerHTML = item.description || 'Pas de description disponible.';
    
    contentItem.appendChild(titleParagraph);
    contentItem.appendChild(descriptionParagraph);
    
    return contentItem;
}

function createStarRating(rating) {
    if (rating === undefined) return document.createTextNode('');
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    const starContainer = createElement('span', { 
        class: 'star-rating ms-2 d-inline-block', 
        'aria-label': `Note: ${rating} sur 5`,
        style: 'white-space: nowrap;'  // Empêcher le retour à la ligne
    });
    
    for (let i = 0; i < fullStars; i++) {
        starContainer.appendChild(createElement('i', { class: 'bi bi-star-fill text-warning' }));
    }
    
    if (hasHalfStar) {
        starContainer.appendChild(createElement('i', { class: 'bi bi-star-half text-warning' }));
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starContainer.appendChild(createElement('i', { class: 'bi bi-star text-warning' }));
    }
    
    return starContainer;
}

function createResultIcon(result) {
    const iconClass = result === 'positif' ? 'bi-check-circle-fill text-success' : 
                      result === 'négatif' ? 'bi-x-circle-fill text-danger' : 
                      'bi-question-circle-fill text-warning';
    const iconAriaLabel = result === 'positif' ? 'Accessibilité positive' : 
                          result === 'négatif' ? 'Accessibilité négative' : 
                          'Accessibilité inconnue';
    return createElement('i', { class: `bi ${iconClass}`, 'aria-label': iconAriaLabel, role: 'img' });
}

function getCategoryTitle(category) {
    const categories = {
        "link": "Liens",
        "press": "Articles de Presse",
        "decree": "Décrets"
    };
    return categories[category] || "Autres";
}

function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'textContent') {
            element.textContent = value;
        } else {
            element.setAttribute(key, value);
        }
    });
    return element;
}