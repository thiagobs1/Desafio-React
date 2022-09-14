import { yupToFormErrors } from "formik";
import * as Yup from "yup";

export default Yup.object().shape({
  nome: Yup.string()
    .required("Campo obrigatório")
    .min(3, "Insira um nome maior de 3 dígitos"),
  email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
  CPF: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /[0-9]\d{2} [0-9]\d{2} [0-9]\d{2} [0-9]\d{1}/,
      "Insira o CPF no formato válido"
    ),
  Dn: Yup.string().required("Campo obrigatório"),
  telefone: Yup.string()
    .required("Campo obrigatório")
    .min(13, "Telefone deve ter o formato informado"),
  instagram: Yup.string()
    .required("Campo obrigatório")
    .matches(/@[a-zA-z]/, "Insira o @ antes do user"),
  check: Yup.string().required("Campo não selecionado"),
});
