"use client";

import { Box, Button, Container } from "@radix-ui/themes";
import React from "react";

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", formData);
  };
  return (
    <Box className="flex h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <Container
        size="3"
        className="flex flex-col items-center justify-center text-center h-screen p-8 rounded-lg shadow-lg"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 mx-auto text-white"
        >
          <path
            d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold mb-2">Welcome to Tenant Care</h1>
        <p className="mb-6 text-gray-600">Please log in to continue.</p>

        {/* form in a row */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="px-4 py-2 bg-white text-white rounded-md hover:bg-blue-600"
          >
            Log In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
