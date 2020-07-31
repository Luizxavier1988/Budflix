import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';



function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);



    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

  /*  function handlerChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target;
        setValue ( getAttribute('name'), value );
    }
*/

function handlerChange (infosDoEvento) {
    setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
    )
}
    return (
      <PageDefault>
       <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
        }}>
            <FormField 
                label="Nome da Categoria"
                type="text"
                name="nome"
                value={values.name}
                onChange={handlerChange}
            />

            <FormField
                label="Descrição"
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={handlerChange}
            />

            <FormField 
                label="Cor"
                type="color"
                name="nome"
                value={values.cor}
                onChange={handlerChange}
            />
            
            <button>
                Cadastrar
            </button>

        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}

        </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;