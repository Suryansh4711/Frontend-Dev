"use strict";
// Q5 - Image Gallery with Modal Preview
// Grid of 6 images, click to open modal with larger image; clicking outside closes modal

if (typeof document !== 'undefined') {
    const images = [
        'https://placekitten.com/300/200',
        'https://placebear.com/300/200',
        'https://picsum.photos/300/200?1',
        'https://picsum.photos/300/200?2',
        'https://picsum.photos/300/200?3',
        'https://picsum.photos/300/200?4'
    ];

    const container = document.createElement('div');
    container.innerHTML = '<h3>Image Gallery</h3>';
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '8px';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '100%';
        img.style.cursor = 'pointer';
        img.tabIndex = 0;
        grid.appendChild(img);
    });
    container.appendChild(grid);
    document.body.appendChild(container);

    // Modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.display = 'none';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    const modalContent = document.createElement('div');
    modalContent.style.background = '#fff';
    modalContent.style.padding = '8px';
    modalContent.style.maxWidth = '80%';
    modalContent.style.maxHeight = '80%';
    modalContent.style.overflow = 'auto';

    const modalImg = document.createElement('img');
    modalImg.style.width = '100%';
    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    grid.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
        }
    });

    // Clicking outside modalContent closes
    modal.addEventListener('click', () => { modal.style.display = 'none'; });
    // Prevent inside clicks from closing
    modalContent.addEventListener('click', (e) => { e.stopPropagation(); });

} else {
    console.log('q5_image_gallery_modal.js is a browser script. Open in browser to run.');
}