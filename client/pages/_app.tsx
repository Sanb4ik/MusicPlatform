import React from 'react';
import {wrapper} from '../store';
import {AppProps} from 'next/app';
import '../styles/globals.css'
import {Provider} from 'react-redux';


class MyApp extends React.Component<AppProps> {
  render() {
    const {Component, pageProps} = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);
