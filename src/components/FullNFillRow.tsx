import * as React from 'react';

type Props = {
  children: [React.ReactChild, React.ReactChild]
}

const FullNFillInRow: React.StatelessComponent<Props> = ({ children }) => (
  <div
    style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
  >
    <div style={{flex: '1 1 auto'}}>
      { children[0] }
    </div>
    <div>
      { children[1] }
    </div>
  </div>
)

export default FullNFillInRow
