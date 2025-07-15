import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const newItem = action.payload;
            const itemIndex = state.product.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price

            } else {
                state.product.push({
                    "albumId": newItem.albumId,
                    "id": newItem.id,
                    "description":newItem.description,
                    "title":newItem.title,
                    "url": newItem.url,
                    "thumbnailUrl": newItem.thumbnailUrl,
                    "price": newItem.price,
                    "quantity":1
                })
            }
                state.totalPrice+=newItem.price;
                state.totalQuantity++;
        },
        removeFromCart(state,action){
            
            const id=action.payload;
            const findItem=state.product.find((product)=>product.id===id)
            if(findItem){
                state.totalPrice -=findItem.price * findItem.quantity;
                
                
                state.totalQuantity -=findItem.quantity
                state.product = state.product.filter(item=>item.id !== id)
                
            }
        },
        increaseProductQuantity(state,action){
          const id=action.payload;
          const increaseItem=state.product.find((product)=>product.id===id)
        //   const productPrice=increaseItem.price;
          if(increaseItem){
            increaseItem.quantity++;
            state.totalQuantity+=1;
            state.totalPrice+=increaseItem.price;
            
        }
    },
    decreaseProductQuantity(state,action){
        const id=action.payload;
        const decreaseItem=state.product.find((product)=>product.id===id)
        if(decreaseItem){
            decreaseItem.quantity--;
            state.totalQuantity-=1;
            state.totalPrice-=decreaseItem.price;
            if(decreaseItem.quantity===0){
                state.product = state.product.filter((items) => items.id !== id)
            }

          }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,increaseProductQuantity,decreaseProductQuantity} = cartSlice.actions

export default cartSlice.reducer