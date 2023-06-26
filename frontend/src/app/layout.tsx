import React from 'react';

import Header from 'components/layout/Header';

import 'assets/scss/globals.scss';

import { ModalProvider } from 'contexts/modals.context';
import Provider from 'redux/provider';

import styles from './layout.module.scss';

import Footer from 'components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <ModalProvider>
          <body id="___next">
            <div className={styles.container}>
              <Header />
              <div className={styles.wrapper}>
                {children}
              </div>
              <Footer />
            </div>
          </body>
        </ModalProvider>
      </Provider>
    </html>
  );
}
