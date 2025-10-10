import React from 'react';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div>
           <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default App;