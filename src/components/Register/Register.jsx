const Register = () => {

  return (
    <div className="form-container">
      <h1>Registro</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Nombre de la Empresa</label>
          <input type="text" className="form-control" id="companyName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  )
}
export default Register
