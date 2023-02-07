import {createSlice, current} from '@reduxjs/toolkit'

const  initialState = []

const Cart = createSlice({
    name: 'Cart',
    initialState : initialState,
    reducers: {
        AddToCart: (state, action)=>{
console.log('added to cart')
                let isExist = false;
                state.map((cartItem, index) =>{
                    if(cartItem.productID == action.payload.productID){
                        isExist=true;
                    }
                })
                if(!isExist){
                    
                    state.push(action.payload)
                }
        },
        IncrementCount: (state, action)=>{
            console.log('increment', action.payload)
            state.map((cartItem, index) =>{
                if(cartItem.productID == action.payload){
                    state[index].Count = state[index].Count + 1
                    console.log('reducer increment:',current(state[index]))
                }
            })
        },
        DecrementCount: (state, action)=>{
            state.map((cartItem, index) =>{
                if(cartItem.productID == action.payload){
                    if(state[index].Count>1){
                        state[index].Count = state[index].Count - 1

                    }
                }
            })
        },
        RemoveFromCart:(state, action)=>{
            state.map((cartItem, index) =>{
                if(cartItem.productID == action.payload){
                    state.splice(index, 1)
                }
            })
        }
    }
});

const CartAction = Cart.actions
const CartReducer = Cart.reducer

export {CartAction, CartReducer}
