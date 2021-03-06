import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const AnimationStyles = styled.span`
  position: absolute;
  .daynight {
    display: block;
    position: absolute;
    transition: all 2s;
    backface-visibility: hidden;
    z-index: 1;
  }
  .daynight-enter {
    transform: rotateY(180deg);
  }
  .daynight-enter-active {
    transform: rotateY(0);
  }
  .daynight-exit {
    top: 0;
    left: 0.3rem;
    position: absolute;
    transform: rotateY(0);
  }
  .daynight-exit-active {
    transform: rotateY(180deg);
  }
`;

const UnStyledButton = styled.button`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0.3rem;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  img {
    width: 2.5rem;
  }
  :focus {
    outline: none;
  }
`;

export default class DarkLightButton extends Component {
  state = {
    themoji: '/icons/sunface.png'
  };
  themeSwitch = () => {
    switch (this.props.themeName) {
      case 'dark':
        this.setState({ themoji: '/icons/moonface.png' });
        setTimeout(() => {
          this.props.switchTheme('light');
        }, 1000);
        break;
      case 'light':
        this.setState({ themoji: '/icons/sunface.png' });
        setTimeout(() => {
          this.props.switchTheme('dark');
        }, 1000);
        break;
      default:
    }
  };
  render() {
    return (
      <AnimationStyles>
        <TransitionGroup>
          <CSSTransition
            unmountOnExit
            className="daynight"
            classNames="daynight"
            key={this.state.themoji}
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <UnStyledButton onClick={this.themeSwitch}>
              <img src={this.state.themoji} alt={this.state.themoji} />
            </UnStyledButton>
          </CSSTransition>
        </TransitionGroup>
      </AnimationStyles>
    );
  }
}
