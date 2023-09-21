import './App.css';
import FoodTruck from './components/foodTruck';


// Images //
import Reactimage from './images/React.png'
import Backendimage from './images/Backend.webp'
import Cimage from './images/C++.png'
import Frontendimage from './images/Frontend.webp'
import Fullstackimage from './images/Fullstack.webp'
import Javaimage from './images/Java.png'
import Nodejsimage from './images/Nodejs.png'
import Pythonimage from './images/python.png'
import Sqlimage from './images/Sql.png'
import Brandimage from './images/brand.png'
import Dashboard from './images/view-dashboard.svg'
import Home from './images/home.svg'
import Profile from './images/account.svg'
import Messages from './images/message.svg'
import History from './images/history.svg'
import Task from './images/clipboard-check.svg'
import Communities from './images/clipboard-check.svg'
import Settings from './images/cog.svg'
import Support from './images/help.svg'
import Privacy from './images/shield-account.svg'


// Images End //
const App = () => {

  return (
    <>
    <div className="maincontainer">
      <div class="sidebar">
        <div class="divider">
          <span class="sideTitle text"><img src={Dashboard} alt="Dashboard" className='side logoImg'/>Community Board</span>
        </div>
        <div class="divider">
          <div class="home text"><img src={Home} alt="Home" className='side'/>Home</div>
          <div class="history text"><img src={History} alt="History" className='side'/>History</div>
          <div class="task text"><img src={Task} alt="Tasks" className='side'/>Task</div>
          <div class="communities text"><img src={Communities} alt="Communities" className='side'/>Communities</div>
        </div>
      </div>
      <div className="App">
        <h1>Cool Software Engineering Roadmaps</h1>
        <div className="container">
          <FoodTruck
          picture = {Reactimage}
          pictureName = 'React Developer Roadmap'
          name = 'React Developer Roadmap'
          link ='https://roadmap.sh/react'
          />
          <FoodTruck
          picture = {Backendimage}
          pictureName = 'Backend Developer Roadmap'
          name = 'Backend Developer Roadmap'
          link ='https://roadmap.sh/backend'
          />
          <FoodTruck
          picture = {Cimage}
          pictureName = 'C++ Developer Roadmap'
          name = 'C++ Developer Roadmap'
          link ='https://roadmap.sh/cpp'
          />
          <FoodTruck
          picture = {Frontendimage}
          pictureName = 'Frontend Developer Roadmap'
          name = 'Frontend Developer Roadmap'
          link ='https://roadmap.sh/frontend'
          />
          <FoodTruck
          picture = {Fullstackimage}
          pictureName = 'Full Stack Developer Roadmap'
          name = 'Full Stack Developer Roadmap'
          link ='https://roadmap.sh/full-stack'
          />
          <FoodTruck
          picture = {Javaimage}
          pictureName = 'Java Developer Roadmap'
          name = 'Java Developer Roadmap'
          link ='https://roadmap.sh/java'
          />
          <FoodTruck
          picture = {Nodejsimage}
          pictureName = 'Node.js Developer Roadmap'
          name = 'Node.js Developer Roadmap'
          link ='https://roadmap.sh/nodejs'
          />
          <FoodTruck
          picture = {Pythonimage}
          pictureName = 'Python Developer Roadmap'
          name = 'Python Developer Roadmap'
          link ='https://roadmap.sh/python'
          />
          <FoodTruck
          picture = {Sqlimage}
          pictureName = 'SQL Roadmap'
          name = 'SQL Roadmap'
          link ='https://roadmap.sh/sql'
          />
          <FoodTruck
          picture = {Brandimage}
          pictureName = 'All Developer Roadmaps'
          name = 'All Developer Roadmaps'
          link ='https://github.com/kamranahmedse/developer-roadmap'
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App