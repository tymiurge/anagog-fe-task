import React from 'react'
import { FormContextConsumer } from './formHoc'
import PropTypes from 'prop-types'

class FieldWrapper extends React.Component {

  componentDidMount() {
    this.props.onFieldMount(this.props.name, this.props.validators || [])
  }

  state = {
    value: undefined,
  }

  onChange = (...args) => {
    const value = this.props.onChange.valueExtractor(...args)
    this.setState({...this.state, value})
    this.props.onFieldChange(this.props.name, this.props.dataTransformer(value))
  }

  onBlur = () => {
    if (!this.props.validators) { return }
    const failedValidator = this.props.validators.find(rule => !rule.func(this.state.value)) 
    const failed = failedValidator !== undefined
    this.props.onFieldValidation(this.props.name, !failed)
  }

  _validationFieldToValueMap = () => {
    if (this.props.reversedTrigger) {
      return !this.props.valid
    }
    return this.props.valid
  }

  render() {
    let config = {
      [this.props.onChange.listenTo]: this.onChange
    }
    if (this.props.validationTrigger) {
      config = {...config, [this.props.validationTrigger]: this._validationFieldToValueMap()}
    }
    if (this.props.onBlurValidation) {
      config = {...config, onBlur: this.onBlur}
    }
    if (this.props.onlyControlled) {
      config = {
        ...config, 
        [this.props.valueField]: this.props.initialState[this.props.name] || this.props.zeroValue
      }
    } else if (this.props.initialState[this.props.name]) {
      config = {...config, defaultValue: this.props.initialState[this.props.name]}
    }
    if (this.props.disabled) {
      config = {...config, disabled: true}
    }
    return (
      React.cloneElement(this.props.field, config)
    )
  }
}

class Field extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.shape({
      listenTo: PropTypes.string.isRequired,
      valueExtractor: PropTypes.func.isRequired
    }).isRequired,
    validators: PropTypes.arrayOf(PropTypes.shape({
      func: PropTypes.func,
      error: PropTypes.string
    })),
    onBlurValidation: PropTypes.bool,
    validationTrigger: (props, propName, componentName) => {
      if (props.validators.length !== 0 && props[propName] === undefined) {
        return new Error(`${componentName}: if validators property is defined then ${propName} must be defined, too.`)      
      }
      const propType = typeof props[propName]
      if (props.validationTrigger !== undefined && propType !== 'string') {
        return new Error(`${componentName}: ${propName} property should be of the string type, intead got ${propType}`)
      }
    },
    reversedTrigger: PropTypes.bool,
    dataTransformer: PropTypes.func,
    onlyControlled: PropTypes.bool,
    valueField: PropTypes.string,
    zeroValue: PropTypes.any,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    validators: [],
    onBlurValidation: false,
    reversedTrigger: false,
    dataTransformer: value => value,
    onlyControlled: false,
    valueField: 'value',
    zeroValue: '',
    disabled: false
  }

  getFieldState = parentState => {
    if (parentState[this.props.name] === undefined) {
      return true
    }
    return parentState[this.props.name]
  }
  
  render() {
    
    return (
      <FormContextConsumer>
        {
          ({onFieldMount, onFieldChange, getValidationState, onFieldValidation, initialState}) => {
            return (<FieldWrapper
              {...this.props}
              field={this.props.children}
              onFieldMount={onFieldMount}
              onFieldChange={onFieldChange}
              onFieldValidation={onFieldValidation}
              valid={this.getFieldState(getValidationState())}
              initialState={initialState}
            />)
          }
        }
      </FormContextConsumer>
    )
  }
}

export default Field