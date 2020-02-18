import { AsyncStorage} from 'react-native';

module.exports ={
    async isAuth(){        
      return await AsyncStorage.getItem('@mh-token') ? true : false
    },
    async token(){        
      return await AsyncStorage.getItem('@mh-token')
    }
  }