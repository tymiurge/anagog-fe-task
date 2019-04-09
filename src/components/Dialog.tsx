import * as React from 'react'
import { Message, Segment } from 'semantic-ui-react'

type Props = {
  title: string,
  controls?: React.ReactNode,
  isContentCentered?: boolean
}

const Dialog: React.FunctionComponent<Props> = ({
  title,
  children,
  controls,
  isContentCentered
}) => (
  <div>
    <Message attached>
      <Message.Header>
        <div>{ title }</div>
      </Message.Header>
    </Message>
    <Segment attached>
      {
        isContentCentered 
          ? (
            <div style={{width: '80%', margin: 'auto', textAlign: 'left'}}>
              { children }
            </div>
          )
          : children
      }
    </Segment>
    {
      <Message attached='bottom'>
        { controls }
      </Message>
    }
  </div>
)

export default Dialog
