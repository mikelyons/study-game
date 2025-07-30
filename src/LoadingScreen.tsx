import { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Import CSS for styling

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task, like fetching data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        // Render your app's content here when loading is complete
        <div className="app-content">
          {/* Your application content */}
          <h1>Welcome to My App</h1>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;