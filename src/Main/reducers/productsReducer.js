const LOAD_PAGE_OK = 'LOAD_PAGE_OK'

const initialState =[
   {
      id: 1,
      productName: 'Pixel',
      price: 45
    },
    {
        id: 2,
        productName: 'Iphone',
        price: 40
      },
       {
          id: 3,
          productName: 'Nexus',
          price: 30
        }
]



export default function (state = initialState, action) {

  switch (action.type) {
  case LOAD_PAGE_OK:
    return { ...state, products: action.payload }

  default:
    return state;
  }
}
