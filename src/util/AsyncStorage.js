import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
    try{
        const data = await AsyncStorage.getItem(key);

        if(!!data) {
            return {"success": true, "data":data};
        }
        return{"success": false};
    } catch(error) {
        console.error(error);
    }
}

const setData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch(error) {
        console.error(error);
    }
}

const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    } catch(error) {
        console.error(error);
    }
}

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch(error) {
        console.error(error);
    }
}

export {getData, setData, clearAll, removeData};