import React from 'react';

import Covid from './components/CovidCases/Covid';

function App() {
  // const [stats, setStats] = useState([]);

  // useEffect(() => {
  //   async function getCurrentData() {
  //     const response = await api.get('/v2/current');
  //     console.log(response.data)
  //   }
  //   getCurrentData();
  // })

  return (
    <div>
      <Covid> </Covid>
    </div>
  );
    
}

export default App;
