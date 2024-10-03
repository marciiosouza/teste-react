import { CircleCheck, CircleX, PencilLine } from "lucide-react";
import { Container } from "./styles";

export const Card = ({ title, category, subcategory, observations }) => {
  return (
    <Container>
      <div className="card">
        <h2>{title}</h2>
        <p>
          {category} / {subcategory}
        </p>
        <div className="line"></div>
        <div className="observations">
          <span>{observations}</span>

          <div className="actions">
            <button>
              <PencilLine size={18} />
            </button>
            <button>
              <CircleX size={18} />
            </button>

            <button>
              <CircleCheck size={18} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
