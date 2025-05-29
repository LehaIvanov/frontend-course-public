import { memo } from 'react';
import { Display } from './Display';

export const DisplayContainer = memo(() => (
  <div className="container">
    <h5>DisplayContainer</h5>
    <Display value="first" />
    <Display value="last" />
  </div>
));
