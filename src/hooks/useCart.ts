import { useAppDispatch, useAppSelector } from './hooks';
// import {useCallback} from "react";
// import {GliderType} from "../store/gliders/glidersSlice";
//
//
// export const useNewBasketItem = (item: GliderType[]): [boolean, () => void] => {
//     const dispatch = useAppDispatch()
//     const basketItems = useAppSelector<any>(state => state.glider)
//     const onBasket = !!basketItems.find(item => item.productID === item.productID)
//
//     const setInBasketHandler = useCallback((buyProduct: any) => {
//         // if (!onBasket) dispatch(addIntoBasketAC(buyProduct))
//     }, [onBasket])
//
//     const setCart = useCallback(() => {
//         const newProduct: GliderType[] = {
//             ...item,
//             productCountToBuy: 1
//         }
//         setInBasketHandler(newProduct)
//     }, [item])
//
//     return [cart, setCart]
// }
