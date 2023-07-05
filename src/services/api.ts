export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(productId: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const data = await response.json();
    return (data);
  } catch (error) {
    console.log(error);
  }
}

export async function getProductByName(productName: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productName}`);
    const data = await response.json();
    return (data.results);
  } catch (error) {
    console.log(error);
  }
}
