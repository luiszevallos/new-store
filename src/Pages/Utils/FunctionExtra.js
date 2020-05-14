
export const cantidadProduct = (list, id) => {
  if (list.length !== 0) {
    for (let i = 0; i < list.length; i++) {
      const product = list[i];
      if (product.id === id) {
        return product.cantidad
      }
    }
  }
  return 0
}