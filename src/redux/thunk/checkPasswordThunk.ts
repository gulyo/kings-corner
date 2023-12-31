import { ThunkAction } from "redux-thunk";
import { t } from "ttag";
import { RootState } from "../state";
import { comLogger, toastMessage } from "../../util";
import { uiSetIsLoggedInAction, uiSetLoadingAction } from "../action";
import { store } from "../store";

export const checkPasswordThunk = (
  password: string,
): ThunkAction<void, RootState, unknown, { type: string }> => {
  return async (dispatch): Promise<void> => {
    dispatch(uiSetLoadingAction(true));
    try {
      if (password !== "kiraly52") {
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
