// @flow
export const CHANGE_STEP = "CHANGE_STEP";

export function changeStep(step: number) {
  return { type: CHANGE_STEP, step };
}
