import { Routes, Route } from 'react-router-dom';
import React from 'react';
import SearchForm from './SearchForm';
import NonFollowersList from './NonFollowersList';
import AboutMe from './AboutMe';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<SearchForm />} />
      <Route path="/non-followers" element={<NonFollowersList />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}
