import { REALTY_ON, CREDIT_ON, PAYMENT_ON } from "../actions/actionsTypes";

const ininialState = {
  realty: true,
  credit: false,
  payment: false,
};

export default function mortgageCalculatorReducer(
  state = ininialState,
  action
) {
  switch (action.type) {
    case REALTY_ON:
      return {
        ...state,
        realty: true,
        credit: false,
        payment: false,
      };
    case CREDIT_ON:
      return {
        ...state,
        realty: false,
        credit: true,
        payment: false,
      };
    case PAYMENT_ON:
      return {
        ...state,
        realty: false,
        credit: false,
        payment: true,
      };
    default:
      return state;
  }
}
