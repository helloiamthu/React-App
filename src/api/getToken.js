import { AsyncStorage } from '@react-native-community/async-storage';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token');
        return token !== null ? token : '';
    } catch (error) {
        return '';
    }
};

export default getToken;