import { ChatWindow } from "./components/chat/ChatWindow";
import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <p className="eyebrow">Servicio Social · NutriBot</p>
        <h1>Frontstage NutriBot</h1>
        <p>
          Interfaz MVP para probar prompts estructurados, respuestas simuladas y perfiles cognitivos
          conectados a una Mock API.
        </p>
      </section>

      <ChatWindow />
    </main>
  );
}

export default App;
