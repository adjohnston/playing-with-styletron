import React from 'react'
import { render } from 'react-dom'

import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

import Button from 'components/Button'

const styles = document.createElement('style')
const styletron = new Styletron([styles])

document.head.appendChild(styles)

render((
  <StyletronProvider styletron={styletron}>
    <Button
      text="Hello" />
  </StyletronProvider>
), document.getElementById('app'))
