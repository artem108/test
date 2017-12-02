export function loadProducts (state) {
    return {
      type: 'LOAD_PAGE_OK',
      products: state
    }
}

export function selectProducts (product) {
    return {
      type: 'SELECTED_PRODUCT',
      select: product
    }
}

export function selectAbouteMe(state) {
    return {
      type: 'SELECTED_ABOUTE',
      aboute: state
    }
}
