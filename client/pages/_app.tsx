import React from 'react';
import {wrapper} from '../store';
import {AppProps} from 'next/app';
import '../styles/globals.css'
import {Provider} from 'react-redux';
import MainLayout from '../loayouts/MainLayout';



class MyApp extends React.Component<AppProps> {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default wrapper.withRedux(MyApp);
