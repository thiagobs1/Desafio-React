import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { string } from "yup";
import "./Form.css";
import FormSchema from "../schema/FormSchema";

const initialValues = {
  nome: "",
  email: "",
  CPF: "",
  Dn: "",
  telefone: "",
  instagram: "",
  check: "",
};

interface Iform {
  nome: string;
  email: string;
  CPF: string;
  Dn: string;
  telefone: string;
  instagram: string;
  check: string;
}

const FcForm = () => {
  const FormikSubmit = (values: Iform) => {
    console.log(values);
  };
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={FormikSubmit}
        validationSchema={FormSchema}
      >
        <Form>
          <div className="form-inputs">
            <div className="form-col">
              <label className="form-labels" htmlFor="name">
                Nome
              </label>
              <Field
                className="form-fields"
                id="name"
                name="nome"
                placeholder="Seu nome completo"
              />
              <ErrorMessage
                component="span"
                name="nome"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col">
              <label className="form-labels" htmlFor="email">
                E-mail
              </label>
              <Field
                className="form-fields"
                id="email"
                name="email"
                placeholder="Seu e-mail"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col">
              <label className="form-labels" htmlFor="CPF">
                CPF
              </label>
              <Field
                className="form-fields"
                id="CPF"
                name="CPF"
                placeholder="000 000 000 00"
              />
              <ErrorMessage
                component="span"
                name="CPF"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col">
              <label className="form-labels" htmlFor="Dn">
                Data de Nascimento
              </label>
              <Field
                className="form-fields"
                id="Dn"
                name="Dn"
                placeholder="00.00.0000"
              />
              <ErrorMessage
                component="span"
                name="Dn"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col">
              <label className="form-labels" htmlFor="telefone">
                Telefone
              </label>
              <Field
                className="form-fields"
                id="telefone"
                name="telefone"
                placeholder="(+00) 0000 0000"
              />
              <ErrorMessage
                component="span"
                name="telefone"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col">
              <label className="form-labels" htmlFor="instagram">
                Instagram
              </label>
              <Field
                className="form-fields"
                id="instagram"
                name="instagram"
                placeholder="@seuUser"
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col form-col-check">
              <label className="form-labels" htmlFor="check">
                Declaro que li e aceito
              </label>
              <Field id="check" name="check" type="checkbox" />
              <ErrorMessage
                component="span"
                name="check"
                className="form-invalid-feedback"
              />
            </div>

            <button className="form-button" type="submit">
              CADASTRE-SE
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { FcForm };
