import { useEffect, useState } from 'react';
import Styles from './Employees.module.css';
import { CustomDatePicker } from '../../components/CustomDatePicker';

const Employess = () => {
  const [activeTab, setActiveTab] = useState('dados');
  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  const [dataNascimento, setDataNascimento] = useState(null);
  const [dataContratacao, setDataContratacao] = useState(null);

  const [cidades, setCidades] = useState([]);
  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios',
    )
      .then((response) => response.json())
      .then((data) => {
        const cidadesOrdenadas = data
          .map((cidade) => ({
            nome: cidade.nome,
            valor: cidade.nome.toLowerCase().replace(/\s/g, '-'),
          }))
          .sort((a, b) => a.nome.localeCompare(b.nome));
        setCidades(cidadesOrdenadas);
      });
  }, []);

  return (
    <section className={`${Styles['employees']}`}>
      <div className={`${Styles['tabs-container']} ${Styles['full-height']}`}>
        <ul className={Styles['nav-tabs']}>
          <li className={activeTab === 'dados' ? Styles['active'] : ''}>
            <a
              id="tabCadastro"
              href="#tab-cad"
              onClick={(e) => handleTabClick(e, 'dados')}
            >
              <i class="bx bxs-user"></i>
            </a>
          </li>
          <li className={activeTab === 'pesquisa' ? Styles['active'] : ''}>
            <a
              id="tabPesquisa"
              href="#tab-pesq"
              onClick={(e) => handleTabClick(e, 'pesquisa')}
            >
              <i class="bx  bx-search-alt"></i>
            </a>
          </li>
        </ul>

        <div className={`${Styles['tab-content']} ${Styles['full-height']}`}>
          {activeTab === 'dados' && (
            <div
              id="tab-cad"
              className={`${Styles['container-form']} ${
                Styles['full-height']
              } ${activeTab === 'dados' ? Styles['active'] : ''}`}
            >
              <form>
                <div className={Styles['form-horizontal']}>
                  <h2 className={Styles['title-person']}>Dados Pessoais</h2>
                  <div className={Styles['form-group']}>
                    <label htmlFor="nomeCompleto">Nome Completo</label>
                    <div>
                      <input
                        id="txtNomeCompleto"
                        name="nomeCompleto"
                        type="text"
                        className={Styles['input-lg']}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divCpf']}`}
                  >
                    <label htmlFor="cpf">CPF</label>
                    <div>
                      <input id="txtCpf" name="cpf" type="text" />
                    </div>

                    <label htmlFor="RG">RG</label>
                    <div>
                      <input
                        id="txtRg"
                        name="RG"
                        type="text"
                        className={Styles['input-sm-2']}
                      />
                    </div>

                    <label htmlFor="digitoRg">Dígito</label>
                    <div>
                      <input
                        id="txtDigito"
                        name="digitoRg"
                        type="text"
                        className={Styles['input-sm']}
                      />
                    </div>
                  </div>
                  <div className={Styles['form-group']}>
                    <div className={Styles['container-select']}>
                      <label>Genêro:</label>
                      <select>
                        <option value="">Selecione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outro</option>
                      </select>
                    </div>

                    <CustomDatePicker
                      label="Data de Nascimento"
                      id="dataNascimento"
                      selectedDate={dataNascimento}
                      onChange={setDataNascimento}
                    />
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divTelefone']}`}
                  >
                    <label htmlFor="email">E-mail</label>
                    <div className={Styles['divInputEmail']}>
                      <input
                        id="txtEmail"
                        name="email"
                        type="text"
                        className={Styles['input-md-2']}
                      />
                    </div>
                    <label htmlFor="telefone">Telefone</label>
                    <div>
                      <input
                        id="txtTelefone"
                        name="telefone"
                        type="text"
                        className={Styles['input-sm-2']}
                      />
                    </div>
                  </div>

                  <h2 className={Styles['title-h2']}>Endereço</h2>
                  <hr className={Styles['line']}></hr>

                  <div
                    className={`${Styles['form-group']} ${Styles['divCep']}`}
                  >
                    <label htmlFor="cep">CEP</label>
                    <div className={Styles['divInputCep']}>
                      <input
                        id="txtCep"
                        name="cep"
                        type="text"
                        className={Styles['input-md-2']}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divEndereço']}`}
                  >
                    <label htmlFor="rua">Rua</label>
                    <div className={Styles['divInputRua']}>
                      <input
                        id="txtRua"
                        name="rua"
                        type="text"
                        className={Styles['input-md-2']}
                      />
                    </div>
                    <label htmlFor="numero">Número</label>
                    <div>
                      <input
                        id="txtNumero"
                        name="numero"
                        type="text"
                        className={Styles['input-sm-1']}
                      />
                    </div>
                  </div>
                  <div
                    className={`${Styles['form-group']}  ${Styles['divEndereço-2']}`}
                  >
                    <label htmlFor="bairro">Bairro</label>
                    <div className={Styles['divInputBairro']}>
                      <input
                        id="txtBairro"
                        name="bairro"
                        type="text"
                        className={Styles['input-md']}
                      />
                    </div>

                    <div className={Styles['container-select-city']}>
                      <label>Cidade</label>
                      <select className={Styles['selection-city']}>
                        <option value="">Selecione</option>
                        {cidades.map((cidade) => (
                          <option key={cidade.valor} value={cidade.valor}>
                            {cidade.nome}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <h2 className={Styles['title-h2']}>
                    Informações Profissionais
                  </h2>
                  <hr className={Styles['line']}></hr>

                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoPessoais']}`}
                  >
                    <label htmlFor="cargoFuncao">Cargo/Função</label>
                    <div className={Styles['divInputCargoFun']}>
                      <input
                        id="txtCargoFuncao"
                        name="cargoFuncao"
                        type="text"
                        className={Styles['input-md-2']}
                      />
                    </div>
                    <label htmlFor="crm">CRM</label>
                    <div>
                      <input
                        id="txtCrm"
                        name="crm"
                        type="text"
                        className={Styles['input-sm-2']}
                      />
                    </div>
                  </div>
                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoPessoais']}`}
                  >
                    <div className={Styles['container-select']}>
                      <label>Status</label>
                      <select className={Styles['divInputStatus']}>
                        <option value="">Selecione</option>
                        <option value="A">Ativo</option>
                        <option value="I">Inativo</option>
                      </select>
                    </div>

                    <CustomDatePicker
                      label="Data de Contratação"
                      id="dataContratacao"
                      selectedDate={dataContratacao}
                      onChange={setDataContratacao}
                    />
                  </div>

                  <h2 className={Styles['title-h2']}>
                    Dados para acesso ao sistema
                  </h2>
                  <hr className={Styles['line']}></hr>

                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoDadosSistema']}`}
                  >
                    <label htmlFor="usuario">Usuário</label>
                    <div className={Styles['divInputUsuario']}>
                      <input
                        id="txtUsuario"
                        name="usuario"
                        type="text"
                        className={Styles['input-sm-2']}
                      />
                    </div>

                    <label htmlFor="emailUsuario">E-mail</label>
                    <div>
                      <input
                        id="txtEmailUsuario"
                        name="emailUsuario"
                        type="text"
                        className={Styles['input-md-2']}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoDadosSistema-2']}`}
                  >
                    <label htmlFor="senhaUsuario">Senha</label>
                    <div className={Styles['divInputUsuario']}>
                      <input
                        id="txtSenhaUsuario"
                        name="senhaUsuario"
                        type="text"
                        className={Styles['input-md-3']}
                      />
                    </div>
                  </div>

                  <div className={Styles['form-group']}>
                    <div className={Styles['container-select-acess']}>
                      <label>Acesso</label>
                      <select>
                        <option value="">Selecione</option>
                        <option value="AD">Admin</option>
                        <option value="VE">Veterinário</option>
                        <option value="AT">Atendimento</option>
                        <option value="RE">Restrito</option>
                      </select>
                    </div>
                  </div>

                  <div className={Styles['space']}></div>
                  <div className={Styles['container-btn']}>
                    <button type="submit" className={Styles.btnSalvar}>
                      <i class="bx  bx-save"></i>
                      <span>Salvar</span>
                    </button>
                  </div>
                  <div className={Styles['space']}></div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'dados' && (
            <div
              id="tab-pesq"
              className={`${Styles['container-form']} ${
                activeTab === 'pesquisa' ? Styles['active'] : ''
              }`}
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Employess;
