import { memo } from 'react';
import { TextInput } from './TextInput';

export const FormContainer = memo(() => (
  <div className="container">
    <h5>FormContainer</h5>
    <TextInput value="first" />
    <TextInput value="last" />
  </div>
));
