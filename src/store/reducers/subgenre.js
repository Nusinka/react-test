import {
  CREATE_SUBGENRE,
  CREATE_SUBGENRE_SUCCESS,
  CREATE_SUBGENRE_FAIL,
  TOGGLE_NEW_SUBGENRE
} from "../actions/subgenre";

type ActionT = {
  type: string,
  error: string,
  newSubgenre: boolean
};

type StateT = {
  loading: boolean,
  loaded: boolean,
  error: string,
  newSubgenre: boolean
};

const initialState = {
  loading: false,
  loaded: false,
  error: "",
  newSubgenre: false
};

const subgenreReducer = (
  state: StateT = initialState,
  action: ActionT
): StateT => {
  switch (action.type) {
    case CREATE_SUBGENRE:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: ""
      };
    case CREATE_SUBGENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case CREATE_SUBGENRE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case TOGGLE_NEW_SUBGENRE:
      return {
        ...state,
        newSubgenre: action.newSubgenre
      };

    default:
      return state;
  }
};

export default subgenreReducer;
