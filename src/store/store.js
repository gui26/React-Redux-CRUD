import { configureStore} from '@reduxjs/toolkit';
import crudReducer from './CrudSlice'
const store = configureStore({
    reducer:{
       
        value: crudReducer
    }
})
export default store;