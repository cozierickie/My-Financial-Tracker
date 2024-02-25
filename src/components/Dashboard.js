// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpenseList';
import BudgetForm from './BudgetForm';

const Dashboard = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(null);

  useEffect(() => {
    // Fetch expenses and monthly budget from your backend API
    fetchExpenses();
    fetchMonthlyBudget();
  }, []);

  const fetchExpenses = async () => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint for expenses
      const response = await fetch('your-api-endpoint/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchMonthlyBudget = async () => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint for monthly budget
      const response = await fetch('your-api-endpoint/monthly-budget');
      const data = await response.json();
      setMonthlyBudget(data.monthlyBudget);
    } catch (error) {
      console.error('Error fetching monthly budget:', error);
    }
  };

  const handleBudgetSave = async (budget) => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint to save the budget
      const response = await fetch('your-api-endpoint/save-budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ budget }),
      });

      if (response.ok) {
        console.log(`Saved monthly budget: ${budget}`);
        setMonthlyBudget(budget);
      } else {
        console.error('Failed to save monthly budget:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving monthly budget:', error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {monthlyBudget !== null && (
        <p>Your monthly budget: ${monthlyBudget.toFixed(2)}</p>
      )}
      <BudgetForm onSave={handleBudgetSave} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
