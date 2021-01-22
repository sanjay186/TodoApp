export function action(type, payload = {}) {
    return { type, ...payload };
  }
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const IS_DONE='IS_DONE';
export const DONETAB ='DONE';
export const DELETE_LIST ='DELETE_LIST';

export const switchtab = data => action ('DONE',data)
export const addToList = data =>action('ADD_TO_LIST', data);
export const complete = data =>action('IS_DONE',data);