import { I18nManager } from "react-native";
import { useSelector } from "react-redux";
import { takeLatest, put, select } from "redux-saga/effects";
import { changeLanguage, setstrapiData, strapiData } from "./slice";
import { setUserLoginData } from "./slice";
//import { i18n, changeI18nLanguage } from '@app/translations';
import AsyncStorage from "@react-native-async-storage/async-storage";
//import RNRestart from 'react-native-restart';
import axios from "axios";
//import { selectUserLanguage } from '@app/common';

function* changeLanguageSaga({ payload }: { payload: any }) {
  try {
    // console.log('inside change language');
    // changeI18nLanguage(payload);
    // console.log('changelanguage', payload);
    // const isRTL = i18n.dir(payload) === 'rtl';
    // const isAppAlreadyRTL = I18nManager.isRTL;
    // if (isRTL !== isAppAlreadyRTL) {
    //   RNRestart.Restart();
    // }
  } catch {
  } finally {
  }
}
// function* strapiSaga() {
//   console.log('inside strapi saga');
//   const strapi: any = {};
//   const payload = yield select(selectUserLanguage);
//   console.log('Newwwest State Inital:', strapi);
//   //const payload = useSelector(selectUserLanguage);

//   //const strapi1: any = {};
//   // //const userLanguage = useSelector(selectUserLanguage);
//   try {
//     const netcheck = NetInfo.fetch().then((state) => {
//       console.log('Connection type', state.type);
//       console.log('Is connected?', state.isConnected);
//     });
//     //strapi.parsed = cms_mock_data;
//     //   //   //needs relogic.
//     //   //   //for real device
//     // if (netcheck) {
//     //   console.log('inside api');
//     //   const test = yield axios.get(
//     //     'http://20.235.138.8:1337/api/sample-login?locale=en&populate=deep',
//     //   );
//     //   strapi.parsed = JSON.parse(test.request._response);
//     //   const test = yield axios
//     //     .get(
//     //       'http://20.235.138.8:1337/api/sample-login?locale=en&populate=deep',
//     //     )
//     //     .then((response) => {
//     //       console.log(response, 'issue');
//     //     })
//     //     .catch((error) => {
//     //       console.log(error.response.data.error);
//     //     });
//     // }
//     // strapi.parsed = JSON.parse(test.request._response);
//     //   if (strapi.parsed === null) {
//     //     strapi.parsed = cms_mock_data;
//     //   }
//     //   console.log(strapi.parsed, 'adqwadqw');
//     // } else {
//     //   console.log('inside else');
//     //   const cms = AsyncStorage.getItem('CMS');
//     //   if (cms) {
//     //     console.log('inside cms else');
//     //     // We have data!!
//     //     strapi.parsed = cms;
//     //     console.log(cms);
//     //   } else {
//     //     strapi.parsed = cms_mock_data;
//     //     //console.log(strapi.parsed);
//     //   }
//     // }

//     //   //for emulator
//     // strapi.parsed = cms_mock_data;
//     // strapi.unfiltred = strapi.parsed;
//     //   console.log('the end', payload);

//     // old code
//     // console.log(
//     //   'AR',
//     //   strapi.unfiltred.data.attributes.localizations.data[0].attributes.general_button);
//     // console.log('EN', strapi.unfiltred.data.attributes.greeting_label);
//     // console.log('Finally', strapi.labels.general_button);
//     // strapi.labels = strapi.unfiltred.data.attributes;
//     // strapi.mark = strapi.newres.data.attributes.marketing_content;
//     // strapi.ar = strapi.newres.data.attributes.localizations.data[0];
//     //   //   //for real device
//     //   if (netcheck) {
//     //     console.log('inside api');
//     //     debugger
//     //
//     //     console.log(test);
//     //     strapi.parsed = JSON.parse(test.request._response);
//     //     // if (strapi.parsed === null) {
//     //     //   strapi.parsed = cms_mock_data;
//     //     // }
//     //     console.log(strapi.parsed, 'adqwadqw');
//     //   }

//     // const test = yield axios
//     //   .get('http://20.235.138.8:1337/api/sample-login?locale=en&populate=deep')
//     //   .finally((strapi.parsed = cms_mock_data));
//     // if (test.request._response === null) {
//     //   console.log('true');
//     //   strapi.parsed = cms_mock_data;
//     // } else {
//     //   console.log('works');
//     //   strapi.parsed = JSON.parse(test.request._response);
//     // }

//     //temp fix
//     strapi.parsed = cms_mock_data;
//     strapi.unfiltred = strapi.parsed;
//     if (payload === 'en') {
//       strapi.labels = strapi.unfiltred.data.attributes;
//       console.log('strapi is not changing', strapi.labels);
//     } else {
//       strapi.labels =
//         strapi.unfiltred.data.attributes.localizations.data[0].attributes;
//       console.log('strapi is changing', strapi.labels);
//     }
//     strapi.logo = strapi.unfiltred.data.attributes.app_logo.data.attributes.url;
//     strapi.marketing = strapi.unfiltred.data.attributes.marketing_content;
//     strapi.terms = strapi.labels.terms;
//     yield put(setstrapiData(strapi));
//     console.log('After setting state:', strapi.labels);
//     AsyncStorage.setItem('CMS', JSON.stringify(strapi));
//   } catch {
//   } finally {
//   }
// }

function* commonSagas() {
  yield takeLatest(changeLanguage, changeLanguageSaga);
  //yield takeLatest(strapiData, strapiSaga);
}

export { commonSagas };
