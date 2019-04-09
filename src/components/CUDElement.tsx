import * as React from 'react';
import { Button } from 'semantic-ui-react';
import FullNFillRow from './FullNFillRow';

type Props = {
  children: React.ReactChild,
  addDisabled?: boolean,
  onAddClick?: () => void,
  onEditClick?: () => void,
  onRemoveClick?: () => void,
}

const CUDElement: React.StatelessComponent<Props> = ({
  children,
  addDisabled,
  onAddClick,
  onEditClick,
  onRemoveClick
}) => (
  <FullNFillRow>
    { children }
    <div style={{marginTop: '20px', marginLeft: '10px', width: '120px'}}>
      { !addDisabled &&
        <Button
          circular size='mini' icon='plus' color='blue'
          onClick={onAddClick}
        />
      }
      <Button
        circular size='mini' icon='edit' color='blue'
        onClick={onEditClick}
      />
      <Button
        circular size='mini' icon='minus' color='red'
        onClick={onRemoveClick}
      />
    </div>
  </FullNFillRow>
)

export default CUDElement