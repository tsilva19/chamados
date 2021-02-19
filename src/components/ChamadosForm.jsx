import './chamados.css'
import React, {useState, useEffect} from "react";


function ChamadosForm(props) {
    const initialFieldValues ={
        numeroChamado: '',
        classificacao: '',
        processo: '',
        descricao: '',
        abertura: '',
        recebimento: '',
        previcaoConclusao: '',
        mesChamado: '',
        ano: '',
        encerrado: '',
        tipoIncidente: '',
        status: '',
        numeroGMUD: '',
        area: '',
        solicitanteResp: '',
        observacao: ''


    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if(props.currentId == '')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.chamadosObjects[props.currentId]
        })
    }, [props.currentId, props.chamadosObjects])
    

    const  handleInputChange =e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }
    
    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-row">
            <div className="form-group input-group col-md-4">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-database"></i>
                    </div>
                </div>
                <input className="form-control" placeholder=" numero do chamado"
                 name="numeroChamado"
                 value={values.numeroChamado}
                 onChange={handleInputChange}
                 />
            </div>
            
            <div className="form-group input-group col-md-4">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="classificacao"
                name="classificacao"
                value={values.classificacao}
                onChange={handleInputChange}
                />
            </div>
                        
            <div className="form-group input-group col-md-4">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="processo"
                name="processo"
                value={values.processo}
                onChange={handleInputChange}
                />
            </div>
        </div>
        
        <div className="form-row">
                        <div className="form-group input-group col-md-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="descrição"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleInputChange}
                            />
                        </div>
                
                        <div className="form-group input-group col-md-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="abertura"
                            name="abertura"
                            value={values.abertura}
                            onChange={handleInputChange}
                            />
                            
                        </div>

                        <div className="form-group input-group col-md-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="recebimento"
                            name="recebimento"
                            value={values.recebimento}
                            onChange={handleInputChange}
                            />
                        </div>
                 
                 </div>
                 <div className="form-row">
                        <div className="form-group input-group col-md-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Previsão da Conclusão"
                            name="previcaoConclusao"
                            value={values.previcaoConclusao}
                            onChange={handleInputChange}
                            />
                            
                        </div>

                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Mês do Chamado"
                        name="mesChamado"
                        value={values.mesChamado}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ano"
                        name="ano"
                        value={values.ano}
                        onChange={handleInputChange}
                        />
                        
                    </div>
                </div>
              <div className="form-row">
                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Encerrado ?"
                        name="encerrado"
                        value={values.encerrado}
                        onChange={handleInputChange}
                        />
                        
                    </div>
            
                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="tipo de Incidente"
                        name="tipoIncidente"
                        value={values.tipoIncidente}
                        onChange={handleInputChange}
                        />
                        
                    </div>

                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="status"
                        name="status"
                        value={values.status}
                        onChange={handleInputChange}
                        />
                        
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="numero da GMUD"
                        name="numeroGMUD"
                        value={values.numeroGMUD}
                        onChange={handleInputChange}
                        />
                        
                    </div>
        

            

                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="area"
                        name="area"
                        value={values.area}
                        onChange={handleInputChange}
                        />
                        
                    </div>

                    <div className="form-group input-group col-md-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Solicitante Responsavel"
                        name="solicitanteResp"
                        value={values.solicitanteResp}
                        onChange={handleInputChange}
                        />
                        
                    </div>

            </div>

            <div className="form-row">
                    <div className="form-group input-group col-md-8">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <textarea className="form-control" placeholder="Observação"
                        name="observacao"
                        value={values.observacao}
                        onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-group input-group col-md-4">
                    
                            <input type="submit"value={props.currentId == ''? "Salvar" : "Update"} 
                             className="btn btn-primary btn-block"
                            />
                    
                    </div>

                   
                    
                    
                    
                    
            </div>
            
           
        </form>


    );
}
 
export default ChamadosForm; 