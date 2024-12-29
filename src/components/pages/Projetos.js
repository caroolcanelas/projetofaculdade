import Mensagens from "../layout/Mensagens";
import styles from "./Projetos.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

import { useLocation } from "react-router-dom";

function Projetos() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveloading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let mensagem = "";
  if (location.state) {
    mensagem = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8089/projetos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveloading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:8089/projetos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.projetos_container}>
      <div className={styles.title_container}>
        <h1>Meus Cursos</h1>
        <LinkButton to="/newProject" text="Criar Curso" />
      </div>
      {mensagem && <Mensagens type="success" msg={mensagem} />}
      {projectMessage && <Mensagens type="success" msg={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              horas={project.horas}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há cursos cadastrados</p>
        )}
      </Container>
    </div>
  );
}

export default Projetos;
