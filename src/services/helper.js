//This is a helper class that contain functions that can be used in every parts of the app.

class Helper {
  static isEmptyObject(obj) {
    return (this.isNullOrUndefined(obj)) ||
           (Object.keys(obj).length === 0 && obj.constructor === Object);
  }

  static isNullOrUndefined(data) {
    return typeof data === 'undefined' || data === null;
  }

  static isString(data) {
    return typeof data === 'string';
  }

  static isNonEmptyString(data) {
    return Helper.isString(data) && data.trim().length > 0;
  }
}

export default Helper;
