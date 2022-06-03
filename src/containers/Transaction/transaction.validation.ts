import * as yup from 'yup'

export const transactionSchema = yup.object().shape({
    description: yup.string().required(),
    amount: yup.number().moreThan(0).required(),
    currency: yup.string().required(),
    receiver: yup.string().email().required(),
})
