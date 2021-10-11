import { useDispatch, useSelector } from "react-redux";
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    // loginReducer: {authenticated},
    tabsReducer: { selectedTab },
  } = state;
  return {
    dispatch,
    selectedTab,
    // errors,
  };
};

export { useRedux };
