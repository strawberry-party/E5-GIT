import { connect } from 'react-redux';
import RoomList from '../components/RoomList';

export default connect(
    null,
    function(dispatch){
      return { 
        onPress: function(mode){
            dispatch({type: mode});
        }
      }
    }
  )(RoomList);