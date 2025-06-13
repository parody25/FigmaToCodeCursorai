import { takeLatest, put, delay, call, select } from "redux-saga/effects";
import {
  doGIBCustomerProfileInquiry,
} from "./slice";
import { Routes, RoutesSection } from "../../constants/index";
import { changeAppSection, createLoader } from "../../common";
import { httpRequest } from "../index";
import { endpoints } from "../../constants/index";
import { NavigationService } from "../../utils/navigation-helper";

function* doGIBCustomerProfileInquirySaga({
  payload,
}: {
  payload: any;
}): Generator {
  const loader = createLoader();
  try {
    yield put(loader.present());
    //const data: any = yield select(selectUserLoginData);

    const { username } = payload;
    console.log("username", username);

    const response: any = yield call(
      httpRequest.get,
      endpoints.getUser(username)
    );
    console.log("response user", response);
    // yield put(setGIBUserProfileData(response));
    yield call(NavigationService.navigate, Routes.List1);
  } catch (error) {
    console.log("error", error);
  } finally {
    yield put(loader.dismiss());
  }
}



function* authSagas(): Generator {
  yield takeLatest(
    doGIBCustomerProfileInquiry,
    doGIBCustomerProfileInquirySaga
  );
}

export { authSagas };
