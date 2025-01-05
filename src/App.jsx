import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import Weather from "./components/weather_comp";
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
      <Weather/>
      <QueryClientProvider/>
    </div>
  );
}

export default App;
