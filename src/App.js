import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Dashbord from './components/dashbord';
function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <Dashbord/>
    </div>
  );
}
export default App;




// const h1 = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;