import { useState } from "react";

const useModals = () => {
  const [filterModal, setFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setFilterModal((prevState) => !prevState);
  };
  return { toggleFilterModal, filterModal };
};
export { useModals };
