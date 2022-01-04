export const state = {
  activeTab: undefined,
};

export const updateActiveTab = (activeTab) => {
  let prevActiveTab = state.activeTab;
  state.activeTab = activeTab;
  return prevActiveTab;
};
