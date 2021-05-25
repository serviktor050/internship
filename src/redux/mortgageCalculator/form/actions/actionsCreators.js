import {
  CHANGE_COST_OF_REAL_ESTATE_FIELD,
  CHANGE_INITIAL_PAYMENT_FIELD,
  CHANGE_LOAN_TERM_FIELD,
  CHANGE_LOAN_AMOUNT_FIELD,
  CHANGE_INTEREST_RATE_FIELD,
  CHANGE_MONTHLY_PAYMENT_FIELD,
} from "./actionsTypes";

export const changeCostOfRealEstateField = (value) => ({
  type: CHANGE_COST_OF_REAL_ESTATE_FIELD,
  payload: { value },
});

export const changeInitialPaymentField = (value) => ({
  type: CHANGE_INITIAL_PAYMENT_FIELD,
  payload: { value },
});

export const changeLoanTermField = (value) => ({
  type: CHANGE_LOAN_TERM_FIELD,
  payload: { value },
});

export const changeLoanAmountField = (value) => ({
  type: CHANGE_LOAN_AMOUNT_FIELD,
  payload: { value },
});

export const changeInterestRateField = (value) => ({
  type: CHANGE_INTEREST_RATE_FIELD,
  payload: { value },
});

export const changeMonthlyPaymentField = (value) => ({
  type: CHANGE_MONTHLY_PAYMENT_FIELD,
  payload: { value },
});
