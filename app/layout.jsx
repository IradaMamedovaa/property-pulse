import React from "react";

import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property pulse | Find the perfect rental",
  description: "Find your perfect rental property with Property Pulse",
  keywords: "rental, find rentals, find property, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
