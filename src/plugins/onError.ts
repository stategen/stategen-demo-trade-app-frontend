import {message} from 'antd'
import ResponseStatus from "@i/enums/ResponseStatus";
import Response from "@i/beans/Response";
import {routerRedux} from 'dva/router';
import {LoginDispatch, loginInitModel} from "@i/interfaces/LoginFaces";

export default {
  onError(e, dispatch) {
    e.preventDefault();
    console.error(e);
    const responseError = e;
    if (responseError && responseError instanceof Object) {
      const response: Response<any> = <Response<any>> responseError;
      if (response.status === ResponseStatus.NOT_LOGIN) {
        message.error(response.message);
        dispatch(LoginDispatch.route());
      }
    } else {
      message.error(e);
    }
  }
}
