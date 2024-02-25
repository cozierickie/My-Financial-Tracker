// src/components/BudgetForm.js

import React, { useState } from 'react';
import './BudgetForm.css';

const BudgetForm = ({ onSave }) => {
  const [budget, setBudget] = useState('');

  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(parseFloat(budget));
    setBudget('');
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <label>
        Set Monthly Budget:
        <input
          type="number"
          value={budget}
          onChange={handleInputChange}
          placeholder="Enter amount"
          required
        />
      </label>
      <button type="submit">Save Budget</button>
    </form>
  );
};

export default BudgetForm;
