// utils.js
export const formatearMoneda = (cantidad) => {
    return `$${cantidad.toFixed(2)} MXN`;
};

export const generarIdUnico = () => {
    return Math.random().toString(36).substring(2, 9);
};