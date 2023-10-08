// src/SideMenu.js
import React, { useState, useEffect } from "react";

const SideMenu = ({ isOpen }) => {
  return (
    <div>
      <div className={`fixed h-full w-3/4 bg-gray-800 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="py-8">
          <li className="p-4 text-white">Item 1</li>
          <li className="p-4 text-white">Item 2</li>
          <li className="p-4 text-white">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
