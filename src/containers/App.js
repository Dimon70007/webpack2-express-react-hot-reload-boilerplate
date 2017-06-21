import React from 'react';
import PropTypes from 'prop-types';
import spongeBob from '../imgs/sponge_bob.jpg';
import { AppCss } from '../styles';

class App extends React.PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div className={AppCss.App}>
        <div className={AppCss['App-sidebar']}>
          <img
            src={spongeBob}
            className={AppCss['App-logo']}
            alt='sponge_bob'
          />
        </div>
        <div className={AppCss['App-main']}>
          <h3>
            hot reload is working with express.js server
            </h3>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
