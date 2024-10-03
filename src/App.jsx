import "./App.css";
import { Card } from "./components/Card/Card";

export const App = () => {
  const items = [
    {
      id: 1,
      title: "Teste React",
      category: "Categoria",
      subcategory: "Subcategoria",
      observations: "Observação",
    },
    {
      id: 2,
      title: "Teste React",
      category: "Categoria",
      subcategory: "Subcategoria",
      observations: "Observação",
    },
    {
      id: 3,
      title: "Teste React",
      category: "Categoria",
      subcategory: "Subcategoria",
      observations: "Observação",
    },
    {
      id: 4,
      title: "Teste React",
      category: "Categoria",
      subcategory: "Subcategoria",
      observations: "Observação",
    },
  ];

  return (
    <div className="container">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          category={item.category}
          subcategory={item.subcategory}
          observations={item.observations}
        />
      ))}
    </div>
  );
};
