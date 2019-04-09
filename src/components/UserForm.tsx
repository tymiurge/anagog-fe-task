import * as React from 'react'
import { Checkbox, Input, Button } from 'semantic-ui-react';
import { forms } from './../hocs/forms'
import FullNFillInRow from './FullNFillRow';

const UserForm: React.FunctionComponent<any> = () => (
  <FullNFillInRow>
    <div style={{marginTop: '10px'}}>
      <forms.Field {...forms.semanticConfig('input', 'name')} >
        <Input placeholder='Type Name...' />
      </forms.Field>
      <forms.Field {...forms.semanticConfig('checkbox', 'canDelete')} dataTransformer={(value: any) => value === '' ? false : !!value}>
        <Checkbox label='Can Delete' style={{marginLeft: '10px'}} />
      </forms.Field>
      <forms.Field {...forms.semanticConfig('checkbox', 'canUpdate')}>
        <Checkbox label='Can Update' style={{marginLeft: '10px'}} />
      </forms.Field>
      <forms.Field {...forms.semanticConfig('checkbox', 'canEditUsers')}>
        <Checkbox label='Can Edit Users' style={{marginLeft: '10px'}} />
      </forms.Field>
    </div>
    <div style={{marginTop: '10px'}}>
      <forms.Submitter><Button size='mini' color='blue'>Save</Button></forms.Submitter>
      <forms.Canceller><Button size='mini' color='red'>Cancel</Button></forms.Canceller>
    </div>
  </FullNFillInRow>
)

export default forms.formHoc(UserForm)
