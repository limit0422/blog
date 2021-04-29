import React, { Component } from 'react';
import { FormattedMessage  } from 'react-intl';
import { Consumer } from './context';

export class Header extends Component {
  render() {
    return (
      <div>
        <HeaderOri />
      </div>
    )
  }
}

export const HeaderOri = () => {
  return (
    <Consumer>
      {(value) => {
        const { headers } = value
        return (
          <div className="headerDiv">
            <div className="left">
              {headers.map((val) => {
                return <li><FormattedMessage id={val} /></li>
              })}
            </div>
            <div className="right"></div>
          </div>
        )
      }}
    </Consumer>
  )
}