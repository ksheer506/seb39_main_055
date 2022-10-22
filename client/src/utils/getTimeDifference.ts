// 서버 시간(updatedAt)이 UTC임에도 문자열 끝에 Z 식별자가 없어 정확한 시간으로 변환되지 않는 문제 해결
function addZSpecifier(time: string[]) {
  return time.map((t) => {
    if (t.endsWith("Z")) return t;

    return `${t}Z`;
  });
}

/**
 * @param startT 시작 시각
 * @param endT 끝 시각
 * @returns 두 시각의 차(ms) 반환
 */
export default function getTimeDifference(
  startT: string | Date,
  endT: string | Date
) {
  const start = startT.toString();
  const end = endT.toString();
  const [T1, T2] = addZSpecifier([start, end]);

  return new Date(T2).getTime() - new Date(T1).getTime();
}
