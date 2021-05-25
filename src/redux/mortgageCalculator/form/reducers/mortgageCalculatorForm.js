import {
  CHANGE_COST_OF_REAL_ESTATE_FIELD,
  CHANGE_INITIAL_PAYMENT_FIELD,
  CHANGE_LOAN_TERM_FIELD,
  CHANGE_LOAN_AMOUNT_FIELD,
  CHANGE_INTEREST_RATE_FIELD,
  CHANGE_MONTHLY_PAYMENT_FIELD,
} from "../actions/actionsTypes";

const initialState = {
  costOfRealEstate: "",
  initialPayment: "",
  loanTerm: "",
  loanAmount: "",
  interestRate: "",
  monthlyPayment: "",
};

export default function mortgageCalculatorFormReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case CHANGE_COST_OF_REAL_ESTATE_FIELD:
      return {
        ...state,
        costOfRealEstate: action.payload.value,
      };
    case CHANGE_INITIAL_PAYMENT_FIELD:
      return {
        ...state,
        initialPayment: action.payload.value,
      };
    case CHANGE_LOAN_TERM_FIELD:
      return {
        ...state,
        loanTerm: action.payload.value,
      };
    case CHANGE_LOAN_AMOUNT_FIELD:
      return {
        ...state,
        loanAmount: action.payload.value,
      };
    case CHANGE_INTEREST_RATE_FIELD:
      return {
        ...state,
        interestRate: action.payload.value,
      };
    case CHANGE_MONTHLY_PAYMENT_FIELD:
      return {
        ...state,
        monthlyPayment: action.payload.value,
      };
    default:
      return state;
  }
}
