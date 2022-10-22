function isNullableItem(value: string | null): value is null {
  return [null, "undefined"].includes(value);
}

export function localStorageParser<T = unknown>(
  key: string,
  initialValue: T
): T;
export function localStorageParser<T = unknown>(key: string): T | null;

export function localStorageParser(key: string, initialValue?: any): any {
  const data = localStorage.getItem(key);

  if (!isNullableItem(data)) {
    return JSON.parse(data);
  }
  // localStorage Item이 빈 문자열("")일 수 있으므로 !data는 사용하지 않음
  if (initialValue) {
    return initialValue;
  }
  return null;
}
