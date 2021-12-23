import { AsyncStorage } from '@react-native-community/async-storage';

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('@token');
    } catch (error) {
        console.log('Loi khi xoa Token');
        console.log(error);
    }
};
export default removeToken;