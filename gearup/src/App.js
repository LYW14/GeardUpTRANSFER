import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './component/common/SiteNav';
import SiteFooter from './component/common/SiteFooter';
import HomePage from './component/home/HomePage';

function App() {
  return (
    <div>
      <SiteNav />
      <HomePage />
      <SiteFooter />

    </div>
  );
}

export default App;
