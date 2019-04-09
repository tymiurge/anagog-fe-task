import * as React from 'react';
import { Grid } from 'semantic-ui-react';

type Props = {
  children: [React.ReactChild, React.ReactChild]
}

const TwoColumns: React.StatelessComponent<Props> = ({ children }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={10}>
        { children[0] }
      </Grid.Column>
      <Grid.Column width={6}>
        { children[1] }
      </Grid.Column>
    </Grid.Row>

    
  </Grid>
)

export default TwoColumns
