
const products = [{
    productID:1,
    firstname:'ytitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:2,
    firstname:'dtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:3,
    firstname:'ititle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:4,
    firstname:'otitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:5,
    firstname:'etitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:6,
    firstname:'wtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:7,
    firstname:'qtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:8,
    firstname:'atitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:9,
    firstname:'ztitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:10,
    firstname:'xtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:11,
    firstname:'ctitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:12,
    firstname:'vtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:13,
    firstname:'btitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:14,
    firstname:'ntitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:15,
    firstname:'mtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:16,
    firstname:'ltitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:17,
    firstname:'ktitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:18,
    firstname:'jtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:19,
    firstname:'htitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:20,
    firstname:'gtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
},{
    productID:21,
    firstname:'dtitle',
    lastname:'subtitle',
    category:'toy',
    discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    file:{name:'become-a-pro-banner.png'},
    Count: 1,
}]

const productReducer = (state=products, action)=>{
    switch(action.type){
        case 'initializeProductArray':{
            state = [];
            state = action.payload;
        }
        case 'Add_Product':{
            let product = action.payload
            if(state[product.productID-1] !== undefined){
                state[product.productID-1] = product
            }
            else{
                state = [...state, product]
            }
            console.log('product reducer', state)

        }
        case 'Delete_Product':{
            state = state.filter(product=> product.productID != action.payload)
        }
        default:{
            return state
        }
    }
}
export default productReducer
export {products}