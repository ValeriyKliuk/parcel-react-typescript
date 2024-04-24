import Reactotron, { trackGlobalErrors } from 'reactotron-react-js'

Reactotron.configure({ name: 'ReactJS' }).use(trackGlobalErrors({})).connect()
