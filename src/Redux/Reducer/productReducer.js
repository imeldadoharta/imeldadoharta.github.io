import ActionType from '../Constant/ActionType';
const initialState = {
    data_product: [{ id: 1, nama: 'laptop', stok: 100 },
    { id: 2, nama: 'camera', stok: 50 },
    { id: 3, nama: 'handphone', stok: 100 },
    { id: 4, nama: 'lensa camera', stok: 100 },
    { id: 5, nama: 'harddisk', stok: 100 }
]
};

    

function productReducers(state = initialState, action) {
    switch (action.type) {
        case ActionType.ADD_PRODUCT:
            return applyAddProduct(state, action)
        case ActionType.UPDATE_PRODUCT:
            return applyUpdateProduct(state, action)
        case ActionType.DEL_PRODUCT:
            return applyDeleteProduct(state, action)
        default:
            return state
    }

}

const applyAddProduct = (state, action) => {
    return {...state}

}


const applyUpdateProduct = (state, action) => {
    const products = [...state.data_product]
    const prods = products.map(prod => {
        if (prod.id === action.payload.id) {
            // prod.nama=action.payload.nama;
             prod.stok = prod.stok-action.payload.stok;
            return { ...prod, nama:action.payload.nama, stok: prod.stok };
            
           
        }
        return prod
    })
    return prods

}
const applyDeleteProduct = (state, action) => {
    const products = [...state.data_product]
    const prods = products.map(prod => {
        if (prod.id === action.payload.id) {           
            products.filter((obj) => obj.id !== prod.id)

        }
        return prod
    })
    return prods

}

export default productReducers