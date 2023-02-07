import React from "react"

const Product = React.createContext()
const ProductProvider = Product.Provider
const ProductConsumer = Product.Consumer

export {Product, ProductProvider, ProductConsumer}
