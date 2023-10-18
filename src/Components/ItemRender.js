import React from 'react'

function ItemRender({item}) {
  return (
    <div id="itemsList"> {item.quantity} {item.name}(s) available at ${item.price}</div>
  )
}

export default ItemRender