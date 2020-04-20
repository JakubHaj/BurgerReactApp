export const updateObject = (oldObject, updatedPropeties) => {
    return {
        ...oldObject,
        ...updatedPropeties
    }
};