import { DataViewer } from './components/DataViewer';
import './App.css';

const SUCCESS_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
const ERROR_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/404.json';

export default function App() {
  return (
    <div className="app-container">
      <h2>Тестирование пользовательского хука useJsonFetch</h2>

      <div className="viewers-grid">
        <DataViewer
          title="1. Успешный запрос (200 OK)"
          url={SUCCESS_URL}
        />

        <DataViewer
          title="2. Запрос с ошибкой (404 Not Found)"
          url={ERROR_URL}
        />
      </div>
    </div>
  );
}