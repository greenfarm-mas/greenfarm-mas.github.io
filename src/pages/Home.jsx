import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { Carousel } from '../components/Carousel';
import { Product } from '../components/Product';
import { Header } from '../components/Header';
import { useState } from 'react';
export function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    var outertotalPrice = 0;
    const addToCart = (item) => {
        if (!item.title || !item.price) {
            return;
          }
        // Check if the item is already in the cart
        const existingItem = cartItems.find(i => i.title === item.title);
        if (existingItem) {
            // If the item is already in the cart, update the quantity
            const updatedCartItems = cartItems.map(i => {
                if (i.title === item.title) {
                    return { ...i, quantity: i.quantity + 1 };
                }
                return i;
            });
            setCartItems(updatedCartItems);
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };
    const purchaseCart = () => {
        // Calculate the total price of the purchase
        const totalPrice = cartItems.reduce((acc, item) => {
          // Strip the "$" symbol and cast the price to a double
          const price = parseFloat(item.price.replace('$', ''));
          return acc + price * item.quantity;
        }, 0);
        console.log(`You purchased ${totalPrice} worth of items!`);
        return totalPrice;
    };
    const fruits = [
        {
            product: 'Apple',
            price: '$1.99',
            image: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
            description: 'A red or green apple with a crisp, juicy flesh.'
        },
        {
            product: 'Banana',
            price: '$0.99',
            image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/31/3200x2292/gallery-1438117220-gettyimages-527593699.jpg?resize=1200:*',
            description: 'A long, curved fruit with a yellow peel and sweet, creamy flesh.'
        },
        {
            product: 'Orange',
            price: '$1.49',
            image: 'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg',
            description: 'A round fruit with a bright orange peel and a juicy, segmented flesh.'
        },
        {
            product: 'Grapefruit',
            price: '$2.99',
            image: 'https://img.freepik.com/free-photo/close-up-grapefruit-slices_23-2148804855.jpg?w=2000',
            description: 'A large, round fruit with a yellow or pink peel and a tart, slightly bitter flesh.'
        },
        {
            product: 'Pineapple',
            price: '$3.99',
            image: 'https://www.thespruceeats.com/thmb/RYIzNdBfEFjT-iVoJ7h_A8AKfB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/high-angle-view-of-pineapples-in-crate-587191515-581101da5f9b58564c6a87df.jpg',
            description: 'A tropical fruit with a tough, spiky skin and a sweet, juicy flesh.'
        },
        {
            product: 'Peach',
            price: '$1.99',
            image: 'https://media.self.com/photos/5b75ad5728dfab53ee567688/4:3/w_2560%2Cc_limit/GettyImages-614938268.jpg',
            description: 'A round fruit with a fuzzy skin and a sweet, juicy flesh.'
        },
        {
            product: 'Pear',
            price: '$1.99',
            image: 'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/5d/83/32ce72b74c91bbac179c707dfb96/pear-guide-article-hero._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg',
            description: 'An elongated fruit with a smooth, green or brown skin and a sweet, grainy flesh.'
        },
        {
            product: 'Strawberry',
            price: '$1.99',
            image: 'https://ichef.bbci.co.uk/images/ic/1200xn/p0c9xp4y.jpg',
            description: 'A small, red fruit with a sweet, juicy flesh and a hull on the top.'
        }

    ];
    return (
        <div className=''>
            <Header addToCart={addToCart} cartItems={cartItems} clearCart={clearCart} purchaseCart={purchaseCart(outertotalPrice)} totalPrice={outertotalPrice}></Header>
            <Carousel></Carousel>
            <div className="py-9  bg-gradient-to-l from-secondary-focus to-primary-focus  text-center rounded-xl h-fit mt-[22.5rem]">
                <h1 className=' text-center text-secondary-content font-bold'>Our Products</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 gap-2 mt-4 mb-28">
                {fruits.map((fruit, index) => (
                    <Product
                        title={fruit.product}
                        price={fruit.price}
                        image={fruit.image}
                        description={fruit.description}
                        modalId={`my-modal-${index}`}
                        addToCart={addToCart}
                        cartItems={cartItems}
                    />
                ))}
            </div>

            <NavBar></NavBar>

        </div>
    )
}