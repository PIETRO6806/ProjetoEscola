import React, { Component } from "react";
import axios from 'axios';
import "./CrudAluno.css";
import Main from "../template/Main";
const title = "Cadastro de Alunos";

const urlAPI = "http://localhost:5176/api/aluno";
const initialState = {
  aluno: { id: 0, ra: '', nome: '', codCurso: 0},
  lista: {}
}
export default class CrudAluno extends Component {

  state = {...initialState}

  componentDidMount(){
      axios(urlAPI).then(resp => {
          this.setState({ lista: resp.data})
      })
  }

  renderTable() {
    return (
      <div className="listagem">
        <table className="listaAlunos" id="tblListaAlunos">
          <thead>
            <tr className="cabecTabela">
              <th className="tabTituloRa">Ra</th>
              <th className="tabTituloNome">Nome</th>
              <th className="tabTituloCurso">Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map(
              (aluno) =>
                <tr key={aluno.id}>
                  <td>{aluno.ra}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.codCurso}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return <Main title={title}>{this.renderTable()}</Main>;
  }
}
