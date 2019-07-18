// @flow
import { CHANGE_STEP } from "../actions/step";

type ActionT = {
  type: string,
  step: number
};

type StateT = {
  activeStep: number
};

const initialState = {
  activeStep: 0
};

const stepReducer = (state: StateT = initialState, action: ActionT): StateT => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        activeStep: action.step
      };

    default:
      return state;
  }
};

export default stepReducer;
