import { omit } from 'lodash';
import categories from '../data/categories.json';
import options from '../data/options.json';
import products from '../data/products.json';

export default (
  state={
    categories,
    error: null,
    options,
    products,
    selectedOptions: {},
    selectedProductId: null,
    viewedProducts: [],
    selectedProductImg: null
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      let selectedOptions;

      const selectedProduct = state.products[action.payload.id];
      switch (selectedProduct.categoryId) {
        case 'limousine':
          selectedOptions = {
            numSeats: 8
          }
          break;
        case 'sportsCar':
          selectedOptions = {
            numSeats: 2
          }
          break;
        case 'taxi':
          selectedOptions = {
            color: '#ffff00'
          }
          break;
        case 'fireEngine':
          selectedOptions = {
            color: '#ff0000',
            numSeats: 2,
            hasTintedWindows: false,
            hasRadio: false,
            hasCigaretteLighters: false
          }
          break;
        case 'jeep':
          selectedOptions = {
            hasTintedWindows: false,
            hasAirConditioning: false
          }
          break;
        default:
          selectedOptions = {}
      }

      const proImg = state.categories[selectedProduct.categoryId].img.lg;

      return {
        ...state,
        selectedProductId: action.payload.id,
        selectedOptions,
        selectedProductImg: proImg
      }
    case 'VIEW_PRODUCT':
      return {
        ...state,
        viewedProducts: [action.payload.id, ...state.viewedProducts]
      }
    case 'REMOVE_OPTION':
      return {
        ...state,
        selectedOptions: omit(state.selectedOptions, [action.payload.id])
      }
    case 'SET_OPTION':
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          ...action.payload
        }
      }
    case 'SET_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error
      }
    case 'REMOVE_ERROR':
      return omit(state, ['error'])
    default:
      return state
  }
}
