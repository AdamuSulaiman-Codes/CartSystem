import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSideBar from "./Components/Sidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  }) 

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId
      }
      return{
        ...prevState,
        tasks:[...prevState.tasks, newTask]
      }
    })
  }
  function handleDeleteTask(id){  
    setProjectState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== id)
      }
    })
  }
  function handleSelectProject(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      }
    })
  }
  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject 
                    project={selectedProject} 
                    onDelete={handleDeleteProject} 
                    onAddTask={handleAddTask}
                    onDeleteTask={handleDeleteTask}
                    tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-50 justify-center">
      <ProjectsSideBar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelect={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
