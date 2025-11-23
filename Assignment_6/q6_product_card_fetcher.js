"use strict";
// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Fetch products from https://fakestoreapi.com/products and log title, price, image

console.log('=== Q6 - Product Card Fetcher ===');

async function fetchProducts() {
    try {
        // Node 18+ has global fetch. If not available, this will throw.
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Network response not ok');
        const products = await res.json();
        products.forEach(p => {
            console.log(`\nProduct: ${p.title}`);
            console.log(`Price: $${p.price}`);
            console.log(`Image: ${p.image}`);
        });

        // Bonus: create HTML product cards when in browser
        if (typeof document !== 'undefined') {
            const container = document.createElement('div');
            container.style.display = 'grid';
            container.style.gridTemplateColumns = 'repeat(auto-fill, 250px)';
            container.style.gap = '12px';
            products.forEach(p => {
                const card = document.createElement('div');
                card.style.border = '1px solid #ccc';
                card.style.padding = '8px';
                card.innerHTML = `
                    <img src="${p.image}" alt="${p.title}" style="max-width:100%; height:120px; object-fit:contain" />
                    <h4>${p.title}</h4>
                    <p>Price: $${p.price}</p>
                `;
                container.appendChild(card);
            });
            document.body.appendChild(container);
        }

    } catch (err) {
        console.error('Failed to load products. Please try again.', err.message);
    }
}

// Run fetchProducts
fetchProducts();

// Note: If running on Node older than v18, global fetch may be undefined. No external libraries are used per instructions.
