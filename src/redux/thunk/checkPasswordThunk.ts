import { ThunkAction } from "redux-thunk";
import { RootState } from "../state";
import { comLogger, toastMessage } from "../../util";
import { uiSetIsLoggedInAction, uiSetLoadingAction } from "../action";
import { t } from "ttag";
import { store } from "../store";

export const checkPasswordThunk = (
  password: string,
): ThunkAction<void, RootState, unknown, { type: string }> => {
  return async (dispatch): Promise<void> => {
    dispatch(uiSetLoadingAction(true));
    try {
      if (password !== "cica") {
        toastMessage({
          type: "error",
          message: t`Invalid password`,
        });
        return;
      }
      store.dispatch(uiSetIsLoggedInAction(true));
    } catch (e) {
      comLogger.error(e);
    } finally {
      dispatch(uiSetLoadingAction(false));
    }
  };
};
