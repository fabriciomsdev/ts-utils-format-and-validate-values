import * as moment from 'moment';

export const formatPriceMasked = (price) => {
    price = String(price).replace(',', '.');
    price = Number(price);

    return price;
}

export const formatPercentMasked = (string) => {
    string = String(string).replace(',', '.').replace('%', '');
    string = Number(string);

    return string;
}


export const formatDate = (date, format = 'YYYY-MM-DD') => {
    return moment(date).format(format);
}


export const removeSpecialCaracthers = (string) => {
    return String(string).replace(/[^\w\s]/gi, "");
}

export const removeSpecialCaracthersAndSpace = (string) => {
    return String(string).replace(/[^\w\s]/gi, "").replace(' ', '');
}

// Função para retirar os espaços em branco do início e do fim da string.
export const trim = (strTexto) => {
    // Substitúi os espaços vazios no inicio e no fim da string por vazio.
    return strTexto.replace(/^s+|s+$/g, '');
}

// Função para validação de CEP.
export const isCEP = (strCEP, blnVazio = false) => {
    const cepIsValid = strCEP != '' && strCEP != null && strCEP.length > 6;

    // Caso o CEP não esteja nesse formato ele é inválido!
    var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

    strCEP = trim(strCEP)


    if (cepIsValid && strCEP.length > 0) {
        if (objER.test(strCEP))
            return true;
        else
            return false;
    }
    else
        return blnVazio;
}