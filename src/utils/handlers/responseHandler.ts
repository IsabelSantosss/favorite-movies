import { GetAllResponseType } from '../interface/GetAllResponseType';
import { toCamel } from 'convert-keys';

export const camelcaseKeys = (obj: any, config: any = null): any => {
      return toCamel(obj);
}

export const convertGetAllResponse = <T, R>(res: GetAllResponseType<R>): T => {
      return camelcaseKeys(res.results, { deep: true }) as T;
}

export const convertResponse = <T, R>(res: R): T => {
      return camelcaseKeys(res, { deep: true }) as T;
}
