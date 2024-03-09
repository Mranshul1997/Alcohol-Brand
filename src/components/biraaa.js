// App.jsx
import React, { useState, useEffect } from "react";
import LoadingPage from "./bira/LoadingPage";
import Nav from "./bira/nav";
import Permission from "./bira/Permission";

function Biraaa() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
      setLoading(false);
    }, 3000);
  }, []);

  const handleAgeVerification = (isVerified) => {
    setShowNav(isVerified);
  };

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : showNav ? (
        <Nav />
      ) : (
        <Permission onAgeVerification={handleAgeVerification} />
        )}
        {/* hyyyy */}
    </div>
  );
}

export default Biraaa;
