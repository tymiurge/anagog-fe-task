import React from 'react'
import PropTypes from 'prop-types'

const FormContext = React.createContext()

const formHoc = Origin => {

  class HOC extends React.Component {

    static propTypes = {
      onSubmit: PropTypes.func,
      onClose: PropTypes.func,
      reporter: PropTypes.func,
      initialState: PropTypes.object,
      formProps: PropTypes.object,
      onChange: PropTypes.func
    }

    static defaultProps = {
      onSubmit: () => {},
      onClose: () => {},
      initialState: {},
      formProps: {},
      onChange: () => {}
    }

    state = {
      data: this.props.initialState,
      validationRules: {},
      validationState: {},
      errors: []
    }

    getValidationState = () => this.state.validationState

    onFieldValidation = (field, valid) => {
      this.setState(
        prevState => {
          const validationState = {...prevState.validationState, [field]: valid}
          return {...prevState, validationState}
        }
      )
    }

    onFieldChange = (field, value) => {
      this.setState(
        (state, props) => {
          const data = {...state.data, [field]: value}
          const validationState = {...state.validationState, [field]: true}
          props.onChange({...data})
          return {...state, data, validationState}
        }
      )
      /*const data = {...this.state.data, [field]: value}
      const validationState = {...this.state.validationState, [field]: true}
      this.setState(
        {...this.state, data, validationState},
        () => {
          this.props.onChange(this.state.data)
        }
      )*/
    }

    onFieldMount = (name, validators) => {
      this.setState(
        (prevState, props) => {
          // change logic here 
          let data = this.state.data
          if (this.state.data[name] === undefined) {
            data = {...prevState.data, [name]: ''}
          }
          //const data = {...prevState.data, [name]: props.initialState[name]}
          const validationRules = {...prevState.validationRules, [name]: validators} 
          const validationState = {...prevState.validationState, [name]: true}   
          return {...prevState, data, validationRules, validationState}
        }
      )      
    }

    onSubmit = () => {
      const validationResult = Object.keys(this.state.data).reduce(
        (acc, key) => {
          const value = this.state.data[key]
          const validators = this.state.validationRules[key]
          if (!validators) {
            return acc
          }
          const failedValidator = validators.find(validator => !validator.func(value))
          if (failedValidator !== undefined) {
            const errors = [...acc.errors, `${key} field: ${failedValidator.error}`]
            const failedFields = [...acc.failedFields, key]
            return {errors, failedFields}
          }
          return acc
        },
        {errors: [], failedFields: []}
      )
      if (validationResult.errors.length === 0) {
        this.props.onSubmit(this.state.data)
      }
      const validationState = Object.keys(this.state.validationState).reduce(
        (acc, key) => ({...acc, [key]: !validationResult.failedFields.includes(key)}),
        {}
      )
      this.setState({...this.state, errors: validationResult.errors, validationState})
    }

    onClose = () => {
      this.props.onClose()
    }

    
    render() {
      return (
        <FormContext.Provider
          value={{
            onFieldMount: this.onFieldMount,
            onFieldChange: this.onFieldChange,
            onSubmit: this.onSubmit,
            onClose: this.onClose,
            getValidationState: this.getValidationState,
            onFieldValidation: this.onFieldValidation,
            initialState: this.state.data,
          }}
        >
          { 
            React.cloneElement(<Origin />, {...this.props.formProps})
          }
          {
            this.props.reporter &&
            <this.props.reporter errors={this.state.errors} />
          }
        </FormContext.Provider>
      )  
    }
  }

  return HOC
}

export default formHoc

export const Aggregator = props => {
  const Component = formHoc(props.children)
  return <Component {...props} />
}

export const FormContextConsumer = FormContext.Consumer
