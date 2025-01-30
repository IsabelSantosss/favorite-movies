import { GetResponse } from './../interfaces/GetResponse';
import { toCamel } from 'convert-keys';

export const camelcaseKeys = (obj: any, config: any = null): any => {
      return toCamel(obj);
}

export const convertResponse = <T, R>(res: GetResponse<R>): T => {
      return camelcaseKeys(res.results, { deep: true }) as T;
}
