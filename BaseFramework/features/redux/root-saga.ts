import { spawn } from "@redux-saga/core/effects";
import { authSagas } from "../services/index";
import { commonSagas } from "../common";

export function* rootSaga(): Generator {
  yield spawn(commonSagas);
  yield spawn(authSagas);
}
