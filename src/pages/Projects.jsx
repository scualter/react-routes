import projects from "../data/projects" 

function Projects () {
  console.log(projects)
  return (
    <>
    <h1>Mis proyectos</h1>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url}>Link</a>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Projects