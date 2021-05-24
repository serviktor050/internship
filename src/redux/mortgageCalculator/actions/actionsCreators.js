import { REALTY_ON, CREDIT_ON, PAYMENT_ON } from "./actionsTypes";

export const realtyOn = () => ({
  type: REALTY_ON,
});

export const creditOn = () => ({
  type: CREDIT_ON,
});

export const paymentOn = () => ({
  type: PAYMENT_ON,
});
