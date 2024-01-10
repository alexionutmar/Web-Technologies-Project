import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import UserInfo from './dashboard_components/InfoUser';

const StudentDashboard = () => {
  const [hasCookie, setHasCookie] = useState(false);
  const [studentID, setStudentID] = useState(null);

    // Add useNavigate here
    const navigate = useNavigate();


  useEffect(() => {
    const checkCookie = () => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('StudentID=')) {
          setHasCookie(true);
          const value = cookie.split('=')[1];
          setStudentID(value);
          return;
        }
      }
      setHasCookie(false);
    };

    checkCookie();
  }, []);

    // Assuming you have a state for user information
    const user = {
      username: 'JohnDoe',
      id: '123',
    };
  
    const handleLogout = () => {
      // Delete the 'StudentID' cookie by setting its expiration to a date in the past
      document.cookie = 'StudentID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
      // Redirect to the main root of the site
      navigate('/');
    };
  
  

  return (
    <div>
      {hasCookie ? (
        // Content to display if the 'StudentID' cookie is set
        <div>
        <UserInfo username={user.username} id={user.id} onLogout={handleLogout} />
        </div>
      ) : (
        // Content to display if the 'StudentID' cookie is not set
        <h1>Error: Student ID not found. Please log in first.</h1>
      )}
    </div>
  );
};

export default StudentDashboard;