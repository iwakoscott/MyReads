export const pack = (accum, next) => {
  const { shelf } = next;
  const prevShelfState = accum[shelf];
  return {
    ...accum,
    [shelf]: [...prevShelfState, next]
  };
};
