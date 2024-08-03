const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];

const filterProducts = (category, minPrice, maxPrice) => {
    return products.filter(product => {
        const categoryMatch = category === "all" || product.category === category;
        const priceMatch = (minPrice === null || product.price >= minPrice) &&
                           (maxPrice === null || product.price <= maxPrice);
        return categoryMatch && priceMatch;
    });
};

const sortProducts = (products, sortBy) => {
    return products.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
};

const generateSummaryReport = (products) => {
    const totalValue = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
    const categoryDistribution = products.reduce((dist, product) => {
        dist[product.category] = (dist[product.category] || 0) + 1;
        return dist;
    }, {});

    return {
        totalValue,
        averagePrice,
        categoryDistribution
    };
};

// Example usage:
const filteredProducts = filterProducts("all", null, null);  // All products
const sortedProducts = sortProducts(filteredProducts, "price");  // Sorted by price
const summaryReport = generateSummaryReport(products);

console.log("Filtered Products:", filteredProducts);
console.log("Sorted Products:", sortedProducts);
console.log("Summary Report:", summaryReport);
