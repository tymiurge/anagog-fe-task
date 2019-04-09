import * as React from 'react'
import { Header } from 'semantic-ui-react'

type Props = {
  title: string,
  text: string
}

const StaticTestField: React.FunctionComponent<Props> = ({title, text}) => (
  <div style={{marginTop: '10px'}}>
    <Header as='h5'>{ title }</Header>
    <div>{ text }</div>
  </div>
)

export default StaticTestField
