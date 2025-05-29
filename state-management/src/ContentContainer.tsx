import { memo } from 'react';
import { DisplayContainer } from './DisplayContainer';
import { FormContainer } from './FormContainer';

export const ContentContainer = memo(() => (
  <div className="container">
    <h5>ContentContainer</h5>
    <FormContainer />
    <DisplayContainer />
  </div>
));
