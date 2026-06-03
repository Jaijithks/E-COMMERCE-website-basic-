const products = [
    {
        id: 1,
        name: 'Headphones',
        price: 99.99,
        image: 'https://images.pexels.com/photos/15487609/pexels-photo-15487609.jpeg',
        description: 'These are high-quality headphones with excellent sound and comfort.'
    },
    {
        id: 2,
        name: 'Watch',
        price: 29.99,
        image: 'https://images.pexels.com/photos/60147/pexels-photo-60147.jpeg',
        description: 'This is a stylish watch that combines functionality with function.'
    },
    {
        id: 3,
        name: 'Led Tv',
        price: 259.99,
        image: 'https://images.pexels.com/photos/6527058/pexels-photo-6527058.jpeg',
        description: 'This is a high-quality LED TV with excellent picture and sound.'
    },
    {
        id: 4,
        name: 'Smartphone',
        price: 200,
        image: 'https://images.pexels.com/photos/16057187/pexels-photo-16057187.jpeg',
        description: 'This is a powerfull smartphone '
    },
    {
        id: 5,
        name: 'Controller',
        price: 59.99,
        image: 'https://images.pexels.com/photos/7776190/pexels-photo-7776190.jpeg',
        description: 'This is  GAMEING CONTROLLER WITH INSANE PERFORMANCE'
    },
    {
        id: 6,
        name: 'Keybord',
        price: 69.99,
        image: 'https://images.pexels.com/photos/4065748/pexels-photo-4065748.jpeg',
        description: 'This is a sick keyboard for gameers'
    },
    {
        id: 7,
        name: 'Mouse',
        price: 79.99,
        image: 'https://images.pexels.com/photos/31018745/pexels-photo-31018745.jpeg',
        description: 'Absolutely fantastic gameing mouse for gamers'
    },
    {
        id: 8,
        name: 'Microphone',
        price: 89.99,
        image: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg',
        description: 'Top-Notch voice for streaming and gameing'
    }

];

export default function getProducts() {
    return products;
}
export function getProductsByID(id){
    return products.find((p) => p.id === Number(id));
}