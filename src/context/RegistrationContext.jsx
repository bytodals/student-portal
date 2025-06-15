import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registeredCourses, setRegisteredCourses] = useState([]);

    const registerCourse = (course) => {
    setRegisteredCourses([...registeredCourses, course]);
    };

    return (
        <RegistrationContext.Provider value={{ registeredCourses, registerCourse }}>
            {children}
        </RegistrationContext.Provider>
    );
};