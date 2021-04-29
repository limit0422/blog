import React, { Component } from 'react';
import { Header } from './Header';
import { IntlProvider } from 'react-intl';
import { Provider } from './context';
import zh_CN from "./local/zh_CN";
import en_US from "./local/en_US";

export class App extends Component {
  state = {
    lang: localStorage.getItem('language') || localStorage.setItem('language', navigator.language),
    headers: ['首页', '个人简历', '作品集'],
  }
  render() {
    let messages = {}
    messages['en-US'] = en_US;
    messages['zh-CN'] = zh_CN;
    return (
      <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}>
        <Provider value={{
          headers: this.state.headers
          }}>
          <Header />
        </Provider>
      </IntlProvider>
    )
  }
}

export default App;