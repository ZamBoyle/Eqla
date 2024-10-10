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
    return createElement('p', { class: 'card-text mb-4', textContent: description });
}

function createContentDescription(content) {
    const p = createElement('p', { class: 'card-text' });
    p.innerHTML = `${createStarRating(content.note)} ${content.description}`;
    return p;
}

function createSectionContent(section, sectionBody, sectionIndex) {
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
    h3.innerHTML = `${sectionIndex + 1}.${h3Counter} ${getCategoryTitle(category)}`;
    return h3;
}

function createContentItem(item, numbered, counter) {
    const contentItem = createElement('div', { class: 'mb-3' });
    let itemContent = '';

    if (item.category) {
        itemContent = createLinkItem(item, numbered ? counter : null);
    } else if (item.title && item.result) {
        itemContent = createResultItem(item, numbered ? counter : null);
    } else if (item.title) {
        itemContent = createTitleItem(item, numbered ? counter : null);
    }

    contentItem.innerHTML = itemContent;
    return contentItem;
}

function createLinkItem(item, counter) {
    const itemNumber = counter ? `${counter}. ` : '';
    return `
        <p><strong>${itemNumber}<a href="${item.url || '#'}" aria-label="${item.title || ''}">${item.title || 'Sans titre'}</a></strong>${createStarRating(item.note)}</p>
        <p>${item.description || 'Pas de description disponible.'}</p>
    `;
}

function createResultItem(item, counter) {
    const itemNumber = counter ? `${counter}. ` : '';
    const iconClass = item.result === 'positif' ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger';
    const iconAriaLabel = item.result === 'positif' ? 'Accessibilité positive' : 'Accessibilité négative';
    return `
        <p><strong>${itemNumber}<i class="bi ${iconClass}" aria-label="${iconAriaLabel}" role="img"></i> ${item.title || 'Sans nom'}</strong>${createStarRating(item.note)}</p>
        <p>${item.description || 'Pas de description disponible.'}</p>
    `;
}

function createTitleItem(item, counter) {
    const itemNumber = counter ? `${counter}. ` : '';
    return `
        <p><strong>${itemNumber}${item.title || 'Sans nom'}</strong>${createStarRating(item.note)}</p>
        <p>${item.description || 'Pas de description disponible.'}</p>
    `;
}

function createStarRating(rating) {
    if (rating === undefined) return '';
    
    const stars = Array.from({ length: 5 }, (_, i) => 
        `<i class="bi ${i < rating ? 'bi-star-fill' : 'bi-star'} text-warning"></i>`
    ).join('');
    
    return `<span class="star-rating ms-2 d-inline-block" aria-label="Note: ${rating} sur 5">${stars}</span>`;
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