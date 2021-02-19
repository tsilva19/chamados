import React, { useState, useEffect } from "react";
import ReactToExcel from 'react-html-table-to-excel';
import ChamadosForm from "./ChamadosForm";
import fireDB from "../../src/firebase";








function Chamados() {

    var [chamadosObjects, setchamadosObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        fireDB.child('chamados').on('value', snapshot =>{
            if(snapshot.val() != null)
            setchamadosObjects({
                ...snapshot.val()
            })
            else
            setchamadosObjects({})
        })
    }, [])

    const addOrEdit = obj => {
        if(currentId == '')
        fireDB.child('chamados').push(
            obj,
            err => {
                if(err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        )
        else
        fireDB.child(`chamados/${currentId}`).set(
            obj,
            err => {
                if(err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        )
    }

    const onDelete = key =>{
            if(window.confirm('Deletar Registro ?'))
            fireDB.child(`chamados/${key}`).remove(
                err => {
                    if(err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">Registros de Chamados BPM</h1>
                </div>
                    
                
            </div>
            <div className="row">
                <div className="col-md-12">
                     <ChamadosForm {...({addOrEdit, currentId, chamadosObjects})}/>
                </div>
               
            </div>

            <div className="row">
                
            <div className="col-md-12">
               
                    <table id="table-to-xls">
                            <thead >
                                <tr>
                                <th> Numero do Chamado</th>
                                <th> Classificação</th>
                                <th> Processo</th>
                                <th> Descrição</th>
                                <th> Abertura</th>
                                <th> Recebimento </th>
                                <th> Previsão de Conclusão</th>
                                <th>  Mês do Chamado</th>
                                <th> Ano</th>
                                <th> Encerrado</th>
                                <th> Tipo de Incidente</th>
                                <th> Status</th>
                                <th> Numero da GMUD</th>
                                <th> Area</th>
                                <th> Solicitante Responsavel </th>
                                <th> Observação</th>
                                <th> Ação</th>
                                </tr>
                                
                            </thead>

                            <tbody>
                                {
                                    Object.keys(chamadosObjects).map(id => {
                                        return <tr>
                                            <td>{chamadosObjects[id].numeroChamado}</td>
                                            <td>{chamadosObjects[id].classificacao}</td>
                                            <td>{chamadosObjects[id].processo}</td>
                                            <td>{chamadosObjects[id].descricao}</td>
                                            <td>{chamadosObjects[id].abertura}</td>
                                            <td>{chamadosObjects[id].recebimento}</td>
                                            <td>{chamadosObjects[id].previsaoConclusao}</td>
                                            <td>{chamadosObjects[id].mesChamado}</td>
                                            <td>{chamadosObjects[id].ano}</td>
                                            <td>{chamadosObjects[id].encerrado}</td>
                                            <td>{chamadosObjects[id].tipoIncidente}</td>
                                            <td>{chamadosObjects[id].status}</td>
                                            <td>{chamadosObjects[id].numeroGMUD}</td>
                                            <td>{chamadosObjects[id].area}</td>
                                            <td>{chamadosObjects[id].solicitanteResp}</td>
                                            <td>{chamadosObjects[id].observacao}</td>
                                            <td>
                                                <a className="btn text primary" onClick={()=> {setCurrentId(id)}}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="btn text danger" onClick={()=> {onDelete(id)}}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                    </table>

                   
                </div>
                </div>
                <p></p>
                <button type="button" class="btn btn-outline-warning">
                    <ReactToExcel
                        className="btn"
                        table="table-to-xls"
                        filename="chamados"
                        sheet="sheet 1"
                        buttonText=" EXPORTAR TABELA"
                    />
                </button>

                
            
            
        
        </>
        


    );
}
 
export default Chamados; 