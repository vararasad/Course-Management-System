import React, { useState } from 'react';
import Tabs from './components/Tabs';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import EnrollmentForm from './components/EnrollmentForm';
import EnrollmentList from './components/EnrollmentList';
import './index.css';

const App = () => {
  const [tab, setTab] = useState('students');

  return (
    <div className="container">
      <h1>Course Management System</h1>
      <Tabs tab={tab} setTab={setTab} />

      {tab === 'students' && (
        <>
          <StudentForm />
          <StudentList />
        </>
      )}
      {tab === 'courses' && (
        <>
          <CourseForm />
          <CourseList />
        </>
      )}
      {tab === 'enrollments' && (
        <>
          <EnrollmentForm />
          <EnrollmentList />
        </>
      )}
    </div>
  );
};

export default App;