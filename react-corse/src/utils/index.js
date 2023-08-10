export const totalPrice = (Products) =>{
    let count = 0;
    Products.forEach(element => count += element.price);
   return count;
}