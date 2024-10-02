import './App.css';
import { CardText } from './presentation/components/text/Card-text.component';
import { Layout } from './presentation/components/layout/Layout';


function App() {
  return (
    <Layout>
      <CardText 
        title='JOSE'
        id={1} 
        paragraph='meu zovo'
        description='Minhas bola tão de luta'
      />
      <CardText 
        title='Carro'
        id={2} 
        paragraph='whatsapp'
        description='Foge foge'
      />
      <CardText 
        title='Bola'
        id={3} 
        paragraph='cacete'
        description='Corram do mijao'
      />
    </Layout>
  );
}

export default App;
