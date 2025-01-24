import React, { createContext, useState } from "react";

const VacancyDataContext = createContext();

export const VacancyDataProvider = ({ children }) => {
  const [vacancyData, setVacancyData] = useState({});

  return (
    <VacancyDataContext.Provider value={{ vacancyData, setVacancyData }}>
      {children}
    </VacancyDataContext.Provider>
  );
};

export default VacancyDataContext;
