import ActionType from "../Constant/ActionType";

export const doAddProduct=(payload)=>{
    return{
        type:ActionType.ADD_PRODUCT,
        payload:{id:payload.id,nama:payload.nama,stok:payload.stok}
    }
}

export const doUpdateProduct=(payload)=>{
    return{
        type:ActionType.UPDATE_PRODUCT,
        payload:{id:payload.id,nama:payload.nama,stok:payload.stok}    }
}

export const doDeleteProduct=(payload)=>{
    return{
        type:ActionType.DEL_PRODUCT,
        payload:{id:payload.id,nama:payload.nama,stok:payload.stok}    }
}

