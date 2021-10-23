import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from 'views/home';

export function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
