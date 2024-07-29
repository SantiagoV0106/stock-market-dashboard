import './App.css'
import { Header, SideBar } from './components';
import { mockCompanyProfile } from './constants/mock'

function App() {

  console.log(mockCompanyProfile);
  const { name, logo } = mockCompanyProfile


  return (
    <>
      <Header />
      <SideBar />
      <main className='main-content'>
        <section className="title">
          <h3>My Portfolio</h3>
        </section>
        <section className='banner'>
          <section> <p>Apple</p> </section>
        </section>
        <section className="company">
          <h3>{name}</h3>
          <img src={logo} alt={`Logo from ${name}`} />
        </section>
      </main>
    </>

  )
}

export default App
