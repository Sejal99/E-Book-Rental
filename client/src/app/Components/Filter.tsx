"use client";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const [categories, setCategories] = useState({
    fiction: false,
    nonfiction: false,
    drama: false,
    comics: false,
  });
  console.log(categories);

  const handleChange = (e, category) => {
    console.log(category);
    setCategories((prev) => {
      const options = { ...prev };
      options[category] = !options[category];
      return options;
    });
    
  };

  useEffect(()=>{
    
  },[])
  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              name="category"
              value={categories[category]}
              onChange={(e) => {
                handleChange(e, category);
              }}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Filter;
