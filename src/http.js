export async function getMeals() {
try {
    const response = await fetch('http://localhost:3000/meals');
    const data = await response.json();
    return data
    console.log(data);
} catch (error) {
    
}
}