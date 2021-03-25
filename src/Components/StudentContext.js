import { createContext, useState } from "react";
export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState({
    aditya: false,
    bodhi: false,
    chetan: false
  });

  // We need actions to:
  // - mark a student as "present"
  // - mark a student as "absent",
  // - add a student to the class.

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};
