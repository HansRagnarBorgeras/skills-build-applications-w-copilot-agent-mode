


import logo from '../public/octofitapp-small.png';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src={logo} alt="Octofit Logo" className="octofit-logo me-2" />
            Octofit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
              <div className="card shadow p-4">
                <h1 className="display-4 mb-3">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
                <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
                <NavLink to="/activities" className="btn btn-primary btn-lg mt-3">Get Started</NavLink>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
