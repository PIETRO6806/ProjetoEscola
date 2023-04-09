import React, { Component } from "react";
import axios from 'axios';
import "./CrudCurso.css";
import Main from "../template/Main";
const title = "Cadastro de Curso";

const urlAPI = "http://localhost:5176/api/curso";
const initialState = {
  aluno: { id: 0, nome: '', periodo: '', codCurso: 0},
  lista: {}
}
export default class CrudCurso extends Component {

  state = {...initialState}

  componentDidMount(){
      axios(urlAPI).then(resp => {
          this.setState({ lista: resp.data})
      })
  }

  renderTable() {
    return (
      <div className="listagem">
        <table className="listaCursos" id="tblListaCursos">
          <thead>
            <tr className="cabecTabela">
              <th className="tabTituloNome">Nome</th>
              <th className="tabTituloPeriodo">Periodo</th>
              <th className="tabTituloCurso">Curso</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map(
              (aluno) =>
                <tr key={aluno.id}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.periodo}</td>
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
