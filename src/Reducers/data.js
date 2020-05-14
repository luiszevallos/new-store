const initialState = {
  login: true,
  seggested: [
    {marca: 'Xioami', modelo: 'Mi Note 10 face', image: 'Xiaomi-Mi-Note-10-face.jpg'},
    {marca: 'Xioami', modelo: 'Mi note 10', image: 'Xiaomi-Mi-Note-10.jpg'},
    {marca: 'Xioami', modelo: 'Redmi Note 8 Pro', image: 'Redmi-Note-8-Pro.jpg'},
    {marca: 'Xioami', modelo: 'Redmi Go', image: 'redmi-go.jpg'},
    {marca: 'Xioami', modelo: 'Mi 9 SE', image: 'comprar-xiaomi-mi-9-SE.jpg'},
  ],
  products: [
    {id: 2322, categoria: 1, marca: 'Xioami', modelo: 'Mi Note 10 face'},
    {id: 2322212, categoria: 1, marca: 'Xioami', modelo: 'Mi note 10'},
    {id: 232213242, categoria: 1, marca: 'Xioami', modelo: 'Redmi Note 8 Pro'},
    {id: 2342322, categoria: 1, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 2323422, categoria: 1, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 2322342, categoria: 1, marca: 'Xioami', modelo: 'Mi Note 10 face'},
    {id: 2123322, categoria: 2, marca: 'Xioami', modelo: 'Mi note 10'},
    {id: 23232422, categoria: 2, marca: 'Xioami', modelo: 'Redmi Note 8 Pro'},
    {id: 2378922, categoria: 2, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 29789322, categoria: 2, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 2789322, categoria: 2, marca: 'Xioami', modelo: 'Mi Note 10 face'},
    {id: 238797822, categoria: 2, marca: 'Xioami', modelo: 'Mi note 10'},
    {id: 239788922, categoria: 2, marca: 'Xioami', modelo: 'Redmi Note 8 Pro'},
    {id: 28978322, categoria: 3, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 237897822, categoria: 3, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 87972322, categoria: 3, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 56752322, categoria: 3, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 56752322, categoria: 3, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 3452322, categoria: 3, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 3252322, categoria: 3, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 98672322, categoria: 3, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 676552322, categoria: 3, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 6657562322, categoria: 4, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 99862322, categoria: 4, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 455642322, categoria: 4, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 245622322, categoria: 4, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 2562322, categoria: 4, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 4562452322, categoria: 4, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 456542322, categoria: 4, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 45642322, categoria: 4, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 657562322, categoria: 4, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 45642322, categoria: 4, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 567562322, categoria: 5, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 65752322, categoria: 5, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 56752322, categoria: 5, marca: 'Xioami', modelo: 'Mi 9 SE'},
    {id: 567562322, categoria: 5, marca: 'Xioami', modelo: 'Redmi Go'},
    {id: 23657522, categoria: 5, marca: 'Xioami', modelo: 'Mi 9 SE'},
  ],
  shopping: [],
}

export default function data(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SHOPPING':
      return {
        ...state,
        shopping: [ ...state.shopping, action.payload ],
      }
    case 'ADD_SHOPPING_CANT':
      return {
        ...state,
        shopping: state.shopping.map(product => {
          if (product.id === action.payload) {
            return {
              ...product,
              cantidad: product.cantidad + 1,
            };
          }
          return product;
        })
      }
    default:
      return state
  }  
}
