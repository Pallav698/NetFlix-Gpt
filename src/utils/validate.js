export const checkValidateData = (email, password) =>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return 'Email is not a valid email';
    if(!isPasswordValid) return 'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character';

    return null;

};