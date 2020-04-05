import {ADD_REMINDER ,DELETE_REMINDER} from '../constants';

//actionların type özelliği olmalıdır, paramtreler de eklenir
export const addReminder = (text, dueDate) => {
    //metod çağarıldığında gelen textle ilgili bir action oluşturuyoruz
    const action = {
        type : ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action dosyasındaki addReminder çağarıldığında oluşturulan action -> ', action);
    return action;
}

export const deleteReminder = (id) => {
    //metod çağarıldığında gelen textle ilgili bir action oluşturuyoruz
    const action = {
        type : DELETE_REMINDER,
        id
    }
    console.log('action dosyasındaki deleteReminder çağarıldığında oluşturulan action -> ', action);
    return action;
}