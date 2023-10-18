import React from 'react'
import ItemRender from './ItemRender'
function Items() {

    const items = [
        {
            id: "001",
            name: "Laptop",
            category: "Electronics",
            price: 1000.00,
            quantity: 50
        },
        {
            id: "002",
            name: "Smartphone",
            category: "Electronics",
            price: 700.00,
            quantity: 100
        },
        {
            id: "003",
            name: "Router",
            category: "Electronics",
            price: 50.00,
            quantity: 200
        },
        {
            id: "004",
            name: "Bookshelf",
            category: "Furniture",
            price: 150.00,
            quantity: 30
        },
        {
            id: "005",
            name: "T-shirt",
            category: "Apparel",
            price: 20.00,
            quantity: 300
        }
    ]

    const itemList = items.map(item => <ItemRender key = {item.id} item={item}/>)
    return <div> {itemList} </div>

}

export default Items