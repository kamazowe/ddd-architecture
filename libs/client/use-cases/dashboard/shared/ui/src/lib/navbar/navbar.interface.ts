import * as path from "path";

// navbar component input payload : NavbarElement[] | null
export interface UiNavbarElement {
  label: string;
  path: UiNavbarElementPath;
}

// navbar component output payload: UiNavbarElementPath
export enum UiNavbarElementPath {
  parts = "parts",
  machines = "machines",
  cart = "cart",
  orders = "orders"
}

// export const customerPaths: UiNavbarElement{} = {
//   {
//     label: "parts"
//     path: UiNavbarElementPath.parts
//   }
//   {
//     label: "machines"
//     path: UiNavbarElementPath.machines
//   }
//   {
//     label: "cart"
//     path: UiNavbarElementPath.cart
//   }
//   {
//     label: "orders"
//     path: UiNavbarElementPath.orders
//   }
// }