import formHoc from './formHoc'
import Field from './Field'
import Submitter from './Submitter'
import Canceller from './Canceller'
import semanticConfig, { namedSemanticConfigs } from './semanticConfig'
import { Aggregator } from './formHoc'

const forms = {
  formHoc,
  Field,
  Submitter,
  Canceller,
  semanticConfig,
  namedSemanticConfigs,
  Aggregator
}

export { forms }