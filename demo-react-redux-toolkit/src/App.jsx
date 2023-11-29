import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Controller from './component/controller'
import Display from './component/display'

function App() {

  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-title"><h1>Counter With Redux</h1></div>
          <div className="body m-5">
            <Display/>
            <Controller/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
