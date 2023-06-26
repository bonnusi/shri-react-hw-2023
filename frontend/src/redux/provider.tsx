'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { reduxStore } from './store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
}
