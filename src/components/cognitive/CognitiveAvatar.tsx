import type { PerfilActivo } from "../../types/nutriBot";

interface CognitiveAvatarProps {
  perfilActivo?: PerfilActivo;
  isBlocked?: boolean;
}

const avatarContent = {
  GUIA: {
    icon: "🤖✨",
    title: "El Guía",
    description: "Prompt claro, con contexto y objetivo. NutriBot responde con apoyo estructurado."
  },
  ESPEJO_SARCASTICO: {
    icon: "🤖🪞",
    title: "El Espejo Sarcástico",
    description: "El prompt tiene algo de intención, pero necesita más contexto para mejorar."
  },
  RESISTENCIA: {
    icon: "🤖⛔",
    title: "La Resistencia",
    description: "Prompt de baja calidad. NutriBot bloquea temporalmente la interacción."
  }
};

export function CognitiveAvatar({ perfilActivo = "ESPEJO_SARCASTICO", isBlocked = false }: CognitiveAvatarProps) {
  const content = avatarContent[perfilActivo];

  return (
    <section className={`cognitive-avatar cognitive-avatar--${perfilActivo.toLowerCase()}`}>
      <div className="cognitive-avatar__icon" aria-hidden="true">
        {content.icon}
      </div>

      <div>
        <p className="eyebrow">Tamagotchi Cognitivo</p>
        <h3>{content.title}</h3>
        <p>{content.description}</p>

        {isBlocked && (
          <strong className="cognitive-avatar__blocked">
            Estado de resistencia activo
          </strong>
        )}
      </div>
    </section>
  );
}
