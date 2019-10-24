import * as moment from 'moment';
import * as cpfValidation from 'cpf-validation';
import * as cnpjValidation from 'cnpj-validation';

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


export const trim = strTexto => strTexto.replace(/^s+|s+$/g, '');

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

export const isCPFValid = (cpf) => cpfValidation.validateCPF(cpf);

export const isCNPJValid = (cnpj) => cnpjValidation.validateCNPJ(cnpj);

export const ageIsGreaterThan18Years = (birthDate) => {
    return moment(birthDate).diff(new Date(), 'years') > 18;
}