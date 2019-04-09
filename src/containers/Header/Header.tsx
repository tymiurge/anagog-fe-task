import * as React from 'react'
import { Menu, Container, Icon, Button } from 'semantic-ui-react'
import { IService, AuthInfo, Service } from '../../models';



interface ReduxProps {
  services: Array<IService>,
  auth: AuthInfo,
  onLogout: () => void
}

interface Props extends ReduxProps {}

// type Props = {
//   services: Array<IService>,
//   auth: AuthInfo,
//   onLogout: () => void
// }

const Dialog: React.FunctionComponent<Props> = ({
  services,
  auth,
  onLogout
}) => (
  <Menu borderless>
    <Container>
      <Menu.Item header>
        {
          services.map((service: IService, idx: number) => (
            <span key={idx}>
              { idx !== 0 && ' | '}
              {service.name}
              <Icon name='circle' color={service.statusOk ? 'green' : 'red'} />
            </span>
          ))
        }
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item header>
          {`Hello, ${auth.name}`}
        </Menu.Item>
        <Menu.Item>
          <Button size='mini' primary onClick={onLogout}>Log Out</Button>
        </Menu.Item>
      </Menu.Menu>  
    </Container>          
  </Menu>
)

export default Dialog
