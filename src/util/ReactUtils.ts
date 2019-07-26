/**
 * <p>
 *   Description: ReactUtils
 * </p>
 * @author c332030（袁兴旺）
 * @version 1.0
 * @date 2019-7-26 15:20
 */
import {SyntheticEvent} from "react";

export class ReactUtils {

  /**
   * 转成字符串
   * @param value
   */
  public static getString(
    value: SyntheticEvent<HTMLInputElement, Event> | string | undefined
  ): Promise<string | SyntheticEvent<HTMLInputElement, Event>> {

    if(value === undefined) {
      return Promise.resolve('');
    }

    if(typeof value !== 'string') {
      return Promise.reject(<SyntheticEvent<HTMLInputElement, Event>>value);
    }

    return Promise.resolve(<string>value);
  }
}
