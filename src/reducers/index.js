import {ADD_REMINDER, DELETE_REMINDER} from '../constants';

//reminders export edilen ve stroeda turulanan state değişkenimiz
const reminders = (state = [], action) => {
    let reminders = null;

    switch (action.type) {
        case ADD_REMINDER:
            console.log('reducerda yeni reminder eklendi', reminders);
            reminders = [...state, reminder(action)];
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        default:
            return state;
    }
}

const reminder = (action) => {
    let {text, dueDate} = action;
    return {
        text,
        dueDate,
        id: Math.random()
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
}

export default reminders;