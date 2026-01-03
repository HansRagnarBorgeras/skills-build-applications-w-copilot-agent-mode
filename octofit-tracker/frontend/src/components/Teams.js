import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const codespace = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
  const apiUrl = `https://${codespace}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', apiUrl);
        console.log('Fetched teams data:', data);
        setTeams(data.results || data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching teams:', err);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <div className="text-center my-5">Loading teams...</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-info">Teams</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  {teams.length > 0 && Object.keys(teams[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr key={team.id || idx}>
                    {Object.values(team).map((val, i) => (
                      <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
