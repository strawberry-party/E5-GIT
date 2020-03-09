import { connect } from 'react-redux';
import Room from '../components/Room';

export default connect(
    null,
    function(dispatch){
      return { 
        onPress: function(mode){
            dispatch({type: mode});
        }
      }
    }
  )(Room);