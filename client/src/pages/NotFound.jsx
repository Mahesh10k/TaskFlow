import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold text-red-600">404</h1>
    <p className="text-gray-500">Page Not Found</p>
    <Link to="/" className="text-blue-600 underline mt-4 inline-block">Go to Home</Link>
  </div>
);

export default NotFound;
