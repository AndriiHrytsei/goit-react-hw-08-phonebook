import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
// import { startTransition } from 'react';
import Navigation from 'components/Navigation/Navigation';
import RegisterPage from 'pages/RegisterPage';

// const ContactForm = lazy(() => import('components/ContactForm/ContactForm'))
// const ContactList = lazy(() => import('components/ContactForm/ContactList'))
// const SearchFilter = lazy(() => import('components/ContactForm/SearchFilter'))
// const Navigation = lazy(() => import('components/Navigation/Navigation'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<RegisterPage />}/>
      </Route>
    </Routes>
  );
}
