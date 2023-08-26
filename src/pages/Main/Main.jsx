import './main.css'
import Register from '../../components/Register/Register'

const Main = () => {
  return (
    <div className="">
      <div className="">
        <div className="d-flex flex-column flex-md-row">
        <div className="col-12 col-md-6">
            <div className="info-container bg-primary text-white p-4">
              <h2>Tu Servicio</h2>
              <p>El mejor lugar para encontrar el servicio que estás buscando.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <Register/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;