export function loadProducts (state) {
    return {
      type: 'LOAD_PAGE_OK',
      products: state
    }
}

export function selectMySkills(state) {
    return {
      type: 'SELECTED_SKILLS',
      skills: state
    }
}

export function selectAbouteMe(state) {
    return {
      type: 'SELECTED_ABOUTE',
      aboute: state
    }
}
