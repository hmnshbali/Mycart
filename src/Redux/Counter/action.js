import { operations } from "./constant";

export const increment = () => ({
    type: operations.INCREMENT,
});

export const decrement = () => ({
    type: operations.DECREMENT,
});

export const reset = () => ({
    type: operations.RESET,
});
