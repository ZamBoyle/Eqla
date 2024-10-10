// app.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = window.data.sections;

    // Charger les sections de navigation dans le header
    const navbarNav = document.querySelector('.navbar-nav');
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item');
        navItem.innerHTML = `<a class="nav-link" href="#${section.id}" aria-label="${section.label}">${section.title}</a>`;
        navbarNav.appendChild(navItem);
    });

    function createStarRating(rating) {
        if (rating === undefined) return '';
        
        let stars = '';
        for (let i = 1; i <= 3; i++) {
            if (i <= rating) {
                stars += '<i class="bi bi-star-fill text-warning"></i>';
            } else {
                stars += '<i class="bi bi-star text-warning"></i>';
            }
        }
        return `<span class="ms-2" aria-label="Note: ${rating} sur 5">${stars}</span>`;
    }

    // Charger les sections dynamiquement dans le main
    const mainContainer = document.querySelector('main.container');
    sections.forEach((section, sectionIndex) => {
        const sectionElement = document.createElement('section');
        sectionElement.id = section.id;
        sectionElement.classList.add('mb-5', 'card');

        const sectionBody = document.createElement('div');
        sectionBody.classList.add('card-body');
        sectionElement.appendChild(sectionBody);

        const h2 = document.createElement('h2');
        h2.classList.add('mb-4', 'text-decoration-underline');
        h2.setAttribute('tabindex', '0');
        h2.innerText = `${sectionIndex + 1}. ${section.title}`;
        sectionBody.appendChild(h2);

        if (section.description) {
            const description = document.createElement('p');
            description.innerText = section.description;
            sectionBody.appendChild(description);
        }

        if (section.content && section.content.description) {
            const contentDescription = document.createElement('p');
            contentDescription.innerHTML = `${createStarRating(section.content.note)} ${section.content.description}`;
            sectionBody.appendChild(contentDescription);
        } else if (Array.isArray(section.content)) {
            let h3Counter = 1;
            section.content.forEach(item => {
                if (item.category) {
                    let h3 = sectionBody.querySelector(`h3[data-category="${item.category}"]`);
                    if (!h3) {
                        h3 = document.createElement('h3');
                        h3.setAttribute('data-category', item.category);
                        h3.innerHTML = `${sectionIndex + 1}.${h3Counter++} ${getCategoryTitle(item.category)}`;
                        sectionBody.appendChild(h3);
                    }

                    const contentItem = document.createElement('p');
                    contentItem.innerHTML = `
                        <a href="${item.url || '#'}" aria-label="${item.title || ''}">${item.title || 'Sans titre'}</a>
                        ${createStarRating(item.note)}
                        <br>${item.description || 'Pas de description disponible.'}
                    `;
                    sectionBody.appendChild(contentItem);
                } else if (item.title && item.result) {
                    const listItem = document.createElement('p');
                    const iconClass = item.result === 'positif' ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger';
                    const iconAriaLabel = item.result === 'positif' ? 'Accessibilité positive' : 'Accessibilité négative';

                    listItem.innerHTML = `
                        <i class="bi ${iconClass}" aria-label="${iconAriaLabel}" role="img"></i> 
                        <strong>${item.title || 'Sans nom'}</strong>${createStarRating(item.note)}
                        <br>${item.description || 'Pas de description disponible.'}
                    `;
                    sectionBody.appendChild(listItem);
                } else if (item.title) {
                    const listItem = document.createElement('p');
                    listItem.innerHTML = `
                        <strong>${item.title || 'Sans nom'}</strong>${createStarRating(item.note)}
                        <br>${item.description || 'Pas de description disponible.'}
                    `;
                    sectionBody.appendChild(listItem);
                }
            });
        }

        mainContainer.appendChild(sectionElement);
    });

    // Ajouter un numéro à tous les titres H2 existants
    const allH2Elements = document.querySelectorAll('h2');
    allH2Elements.forEach((h2, index) => {
        const titleText = h2.innerText.replace(/^\d+\.\s*/, '');
        h2.innerText = `${index + 1}. ${titleText}`;
    });

    // Ajouter un numéro hiérarchique aux titres H3
    const allSections = document.querySelectorAll('section');
    allSections.forEach((section, sectionIndex) => {
        const h3Elements = section.querySelectorAll('h3');
        h3Elements.forEach((h3, h3Index) => {
            const titleText = h3.innerText.replace(/^\d+\.\d+\s*/, '');
            h3.innerText = `${sectionIndex + 1}.${h3Index + 1} ${titleText}`;
        });
    });

    function getCategoryTitle(category) {
        switch (category) {
            case "link":
                return "Liens";
            case "press":
                return "Articles de Presse";
            case "decree":
                return "Décrets";
            default:
                return "Autres";
        }
    }
});