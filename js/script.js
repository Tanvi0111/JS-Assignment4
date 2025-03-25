// Fetch product data from JSON file
fetch('products.json')
    .then(response => response.json())  // Parse the JSON data
    .then(data => {
        const container = document.getElementById('jsonData');
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // Add product details to the div
            itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
                <p>Category: ${item.category}</p>
                <img src="${item.image}" alt="${item.name}" />
            `;
            container.appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
