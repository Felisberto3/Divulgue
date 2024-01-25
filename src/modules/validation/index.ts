import * as Yup from 'yup'
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    surName: Yup.string().required(),
    municipio: Yup.string().required(),
    municipioId: Yup.string().required(),
    name: Yup.string().required(),

})


  export { schema }