import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 2rem;

.card h2, p {
  margin-bottom: 0.875rem;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  border-left: 4px solid #007dc6;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
  padding: 1.2rem;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.line {
  height: 1px;
  background-color: #828282;
}

.observations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.725rem;
}

.actions {
  display: flex;
  gap: 0.725rem;
}

button {
  background: transparent;
  border: none;
  color: #828282;
}
`