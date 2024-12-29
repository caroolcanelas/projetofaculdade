import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import styles from "../project/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome da matéria"
        name="name"
        placeholder="Insira o nome da matéria"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Total de Horas da matéria"
        name="cost"
        placeholder="Insira o total de horas da matéria"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição da matéria"
        name="description"
        placeholder="Descreva a matéria"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
