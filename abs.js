const isPositive = (nb) => nb > 0;
const abs = (nb) => {
    if(isPositive(nb)){
        return nb
    }else{
        return -nb
    }
};
