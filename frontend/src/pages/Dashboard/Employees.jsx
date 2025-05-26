import { useEffect, useState } from 'react';
import Styles from './Employees.module.css';
import { CustomDatePicker } from '../../components/CustomDatePicker';
import { showAlert } from '../../components/PresentMessage';
import { DataGrid } from '@mui/x-data-grid';

const Employess = () => {
  const baseUrl = 'http://localhost:5088/api/employee';

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((error) => {
        console.error('Erro ao buscar funcionários:', error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'ds_Name', headerName: 'Nome', flex: 1 },
    { field: 'ds_Cargo', headerName: 'Cargo', flex: 1 },
    { field: 'ds_CPF', headerName: 'CPF', flex: 1 },
    { field: 'nr_Telefone', headerName: 'Telefone', flex: 1 },
    { field: 'ds_Genero', headerName: 'Sexo', flex: 1 },
    {
      field: 'dt_DataContratacao',
      headerName: 'Data Contratação',
      flex: 1,
      renderCell: (params) => {
        const date = new Date(params.value);
        return <span>{date.toLocaleDateString('pt-BR')}</span>;
      },
    },
    { field: 'ds_Status', headerName: 'Status', flex: 1 },
  ];

  const [activeTab, setActiveTab] = useState('dados');
  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  // const [dataNascimento, setDataNascimento] = useState(null);
  // const [dataContratacao, setDataContratacao] = useState(null);

  const [formData, setFormData] = useState({
    id: null,
    ds_Name: '',
    ds_CPF: '',
    ds_RG: '',
    ds_Genero: '',
    ds_Email_Pessoal: '',
    nr_Telefone: '',
    ds_CEP: '',
    ds_Rua: '',
    nr_Numero: '',
    ds_Bairro: '',
    ds_Cidade: '',
    ds_Cargo: '',
    nr_CRM: '',
    ds_Status: '',
    ds_Usuario: '',
    ds_Email: '',
    ds_Password: '',
    ds_Acesso: '',
    dt_DataNascimento: null,
    dt_DataContracao: null,
  });

  const doubleClick = async (params) => {
    const id = params.row.id;

    try {
      const response = await fetch(`http://localhost:5088/api/employee/${id}`);
      const data = await response.json();

      // Preencha os campos do formulário com os dados retornados
      setFormData({
        id: data.id,
        ds_Name: data.ds_Name || '',
        ds_CPF: formatCPF(data.ds_CPF || ''),
        ds_RG: formatRG(data.ds_RG || ''),
        ds_Genero: data.ds_Genero || '',
        ds_Email_Pessoal: data.ds_Email_Pessoal || '',
        nr_Telefone: formatTelefone(data.nr_Telefone || ''),
        ds_CEP: data.ds_CEP || '',
        ds_Rua: data.ds_Rua || '',
        nr_Numero: data.nr_Numero || '',
        ds_Bairro: data.ds_Bairro || '',
        ds_Cidade: data.ds_Cidade || '',
        ds_Cargo: data.ds_Cargo || '',
        nr_CRM: data.nr_CRM || '',
        ds_Status: data.ds_Status || '',
        ds_Usuario: data.ds_Usuario || '',
        ds_Email: data.ds_Email || '',
        ds_Password: '',
        ds_Acesso: data.ds_Acesso || '',
        dt_DataNascimento: data.dt_DataNascimento
          ? new Date(data.dt_DataNascimento)
          : null,
        dt_DataContracao: data.dt_DataContratacao
          ? new Date(data.dt_DataContratacao)
          : null,
      });

      // Alterna para a aba de edição, se for o caso
      setActiveTab('dados');
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Função para excluir
  const handleDelete = async () => {
    if (!formData.id) {
      showAlert({
        icon: 'warning',
        title: 'Selecione um funcionário',
        text: 'Para excluir, primeiro selecione um funcionário da lista.',
      });
      return;
    }

    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir este funcionário?',
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${baseUrl}/${formData.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        showAlert({
          icon: 'success',
          title: 'Excluído!',
          text: 'Funcionário excluído com sucesso.',
        });
        // Limpa o formulário
        setFormData({
          id: null,
          ds_Name: '',
          ds_CPF: '',
          ds_RG: '',
          ds_Genero: '',
          ds_Email_Pessoal: '',
          nr_Telefone: '',
          ds_CEP: '',
          ds_Rua: '',
          nr_Numero: '',
          ds_Bairro: '',
          ds_Cidade: '',
          ds_Cargo: '',
          nr_CRM: '',
          ds_Status: '',
          ds_Usuario: '',
          ds_Email: '',
          ds_Password: '',
          ds_Acesso: '',
          dt_DataNascimento: null,
          dt_DataContracao: null,
        });
        // Atualiza a lista de funcionários
        fetch(baseUrl)
          .then((res) => res.json())
          .then((data) => setEmployees(data))
          .catch((error) => {
            console.error('Erro ao atualizar lista:', error);
          });
      } else {
        const errorText = await response.text();
        showAlert({
          icon: 'error',
          title: 'Erro ao excluir',
          text: errorText || 'Não foi possível excluir o funcionário.',
        });
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showAlert({
        icon: 'error',
        title: 'Erro de rede',
        text: 'Verifique sua conexão com a internet.',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === 'ds_CPF') newValue = formatCPF(value);
    if (name === 'ds_RG') newValue = formatRG(value);
    if (name === 'nr_Telefone') newValue = formatTelefone(value);

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})?/, '$1.$2.$3-$4');
  };

  const formatRG = (value) => {
    return value
      .toUpperCase()
      .replace(/[^0-9X]/g, '')
      .slice(0, 9)
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2}\.\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{2}\.\d{3}\.\d{3})([0-9X])/, '$1-$2')
      .slice(0, 14);
  };

  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  };

  // Remove máscaras antes de enviar para API
  const unmask = (value) => value.replace(/\D/g, '');

  const clinicaId = localStorage.getItem('clinicaId');

  const formSubmit = async (e) => {
    e.preventDefault();

    // Verifica se campos obrigatórios estão preenchidos
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string' && value.trim() === '') {
        showAlert({
          icon: 'warning',
          title: 'Campos obrigatórios',
          text: 'Preencha todos os campos antes de continuar.',
        });
        return;
      }
    }
    const employeeId = formData.id ? formData.id : 0;
    const method = employeeId ? 'PUT' : 'POST';
    const url = employeeId ? `${baseUrl}/${employeeId}` : baseUrl;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: employeeId,
          ds_Name: formData.ds_Name,
          ds_CPF: unmask(formData.ds_CPF),
          ds_RG: unmask(formData.ds_RG),
          ds_Genero: formData.ds_Genero,
          ds_Email_Pessoal: formData.ds_Email_Pessoal,
          nr_Telefone: unmask(formData.nr_Telefone),
          ds_CEP: formData.ds_CEP,
          ds_Rua: formData.ds_Rua,
          nr_Numero: formData.nr_Numero,
          ds_Bairro: formData.ds_Bairro,
          ds_Cidade: formData.ds_Cidade,
          ds_Cargo: formData.ds_Cargo,
          nr_CRM: formData.nr_CRM,
          ds_Status: formData.ds_Status,
          ds_Usuario: formData.ds_Usuario,
          ds_Email: formData.ds_Email,
          ds_Password: formData.ds_Password,
          ds_Acesso: formData.ds_Acesso,
          dt_DataNascimento: formData.dt_DataNascimento?.toISOString(),
          dt_DataContracao: formData.dt_DataContracao?.toISOString(),
          ClinicId: parseInt(clinicaId),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data != null && data != '') {
          showAlert({
            icon: 'success',
            title:
              method === 'POST'
                ? 'Cadastro realizado!'
                : 'Atualizado com sucesso!',
            text:
              method === 'POST'
                ? 'Funcionário salvo com sucesso.'
                : 'Funcionário atualizado com sucesso.',
            onConfirm: () => {
              // Resetar o formulário
              setFormData({
                id: null,
                ds_Name: '',
                ds_CPF: '',
                ds_RG: '',
                ds_Genero: '',
                ds_Email_Pessoal: '',
                nr_Telefone: '',
                ds_CEP: '',
                ds_Rua: '',
                nr_Numero: '',
                ds_Bairro: '',
                ds_Cidade: '',
                ds_Cargo: '',
                nr_CRM: '',
                ds_Status: '',
                ds_Usuario: '',
                ds_Email: '',
                ds_Password: '',
                ds_Acesso: '',
                dt_DataNascimento: null,
                dt_DataContracao: null,
              });

              // Atualiza a lista de funcionários
              fetch(baseUrl)
                .then((res) => res.json())
                .then((data) => setEmployees(data));
            },
          });
        }
      } else {
        const errorText = await response.text();
        showAlert({
          icon: 'error',
          title: 'Erro ao salvar',
          text: errorText || 'Ocorreu um erro inesperado.',
        });
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      showAlert({
        icon: 'error',
        title: 'Erro de rede',
        text: 'Verifique sua conexão com a internet.',
      });
    }
  };

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
              <form onSubmit={formSubmit}>
                <div className={Styles['form-horizontal']}>
                  <h2 className={Styles['title-person']}>Dados Pessoais</h2>
                  <div className={Styles['form-group']}>
                    <label htmlFor="ds_Name">Nome Completo</label>
                    <div>
                      <input
                        id="txtNomeCompleto"
                        name="ds_Name"
                        type="text"
                        className={Styles['input-lg']}
                        value={formData.ds_Name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divCpf']}`}
                  >
                    <label htmlFor="ds_CPF">CPF</label>
                    <div className={Styles['divInputCpf']}>
                      <input
                        id="txtCpf"
                        name="ds_CPF"
                        type="text"
                        value={formData.ds_CPF}
                        onChange={handleChange}
                      />
                    </div>

                    <label htmlFor="ds_RG">RG</label>
                    <div>
                      <input
                        id="txtRg"
                        name="ds_RG"
                        type="text"
                        className={Styles['input-sm-2']}
                        value={formData.ds_RG}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={Styles['form-group']}>
                    <div className={Styles['container-select']}>
                      <label>Genêro:</label>
                      <select
                        name="ds_Genero"
                        value={formData.ds_Genero}
                        onChange={handleChange}
                      >
                        <option value="">Selecione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        <option value="O">Outro</option>
                      </select>
                    </div>

                    <CustomDatePicker
                      label="Data de Nascimento"
                      id="dataNascimento"
                      selectedDate={formData.dt_DataNascimento}
                      onChange={(date) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          dt_DataNascimento: date,
                        }))
                      }
                    />
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divTelefone']}`}
                  >
                    <label htmlFor="ds_Email_Pessoal">E-mail</label>
                    <div className={Styles['divInputEmail']}>
                      <input
                        id="txtEmail"
                        name="ds_Email_Pessoal"
                        type="email"
                        className={Styles['input-md-2']}
                        value={formData.ds_Email_Pessoal}
                        onChange={handleChange}
                      />
                    </div>
                    <label htmlFor="nr_Telefone">Telefone</label>
                    <div>
                      <input
                        id="txtTelefone"
                        name="nr_Telefone"
                        type="text"
                        className={Styles['input-sm-2']}
                        value={formData.nr_Telefone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <h2 className={Styles['title-h2']}>Endereço</h2>
                  <hr className={Styles['line']}></hr>

                  <div
                    className={`${Styles['form-group']} ${Styles['divCep']}`}
                  >
                    <label htmlFor="ds_CEP">CEP</label>
                    <div className={Styles['divInputCep']}>
                      <input
                        id="txtCep"
                        name="ds_CEP"
                        type="text"
                        className={Styles['input-md-2']}
                        value={formData.ds_CEP}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divEndereço']}`}
                  >
                    <label htmlFor="ds_Rua">Rua</label>
                    <div className={Styles['divInputRua']}>
                      <input
                        id="txtRua"
                        name="ds_Rua"
                        type="text"
                        className={Styles['input-md-2']}
                        value={formData.ds_Rua}
                        onChange={handleChange}
                      />
                    </div>
                    <label htmlFor="nr_Numero">Número</label>
                    <div>
                      <input
                        id="txtNumero"
                        name="nr_Numero"
                        type="text"
                        className={Styles['input-sm-1']}
                        value={formData.nr_Numero}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className={`${Styles['form-group']}  ${Styles['divEndereço-2']}`}
                  >
                    <label htmlFor="ds_Bairro">Bairro</label>
                    <div className={Styles['divInputBairro']}>
                      <input
                        id="txtBairro"
                        name="ds_Bairro"
                        type="text"
                        className={Styles['input-md']}
                        value={formData.ds_Bairro}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={Styles['container-select-city']}>
                      <label>Cidade</label>
                      <select
                        name="ds_Cidade"
                        className={Styles['selection-city']}
                        value={formData.ds_Cidade}
                        onChange={handleChange}
                      >
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
                    <label htmlFor="ds_Cargo">Cargo/Função</label>
                    <div className={Styles['divInputCargoFun']}>
                      <input
                        id="txtCargoFuncao"
                        name="ds_Cargo"
                        type="text"
                        className={Styles['input-md-2']}
                        value={formData.ds_Cargo}
                        onChange={handleChange}
                      />
                    </div>
                    <label htmlFor="nr_CRM">CRM</label>
                    <div>
                      <input
                        id="txtCrm"
                        name="nr_CRM"
                        type="text"
                        className={Styles['input-sm-2']}
                        value={formData.nr_CRM}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoPessoais']}`}
                  >
                    <div className={Styles['container-select']}>
                      <label>Status</label>
                      <select
                        name="ds_Status"
                        className={Styles['divInputStatus']}
                        value={formData.ds_Status}
                        onChange={handleChange}
                      >
                        <option value="">Selecione</option>
                        <option value="A">Ativo</option>
                        <option value="I">Inativo</option>
                      </select>
                    </div>

                    <CustomDatePicker
                      label="Data de Contratação"
                      id="dataContratacao"
                      selectedDate={formData.dt_DataContracao}
                      onChange={(date) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          dt_DataContracao: date,
                        }))
                      }
                    />
                  </div>

                  <h2 className={Styles['title-h2']}>
                    Dados para acesso ao sistema
                  </h2>
                  <hr className={Styles['line']}></hr>

                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoDadosSistema']}`}
                  >
                    <label htmlFor="ds_Usuario">Usuário</label>
                    <div className={Styles['divInputUsuario']}>
                      <input
                        id="txtUsuario"
                        name="ds_Usuario"
                        type="text"
                        className={Styles['input-sm-2']}
                        value={formData.ds_Usuario}
                        onChange={handleChange}
                      />
                    </div>

                    <label htmlFor="ds_Email">E-mail</label>
                    <div>
                      <input
                        id="txtEmailUsuario"
                        name="ds_Email"
                        type="email"
                        className={Styles['input-md-2']}
                        value={formData.ds_Email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div
                    className={`${Styles['form-group']} ${Styles['divInfoDadosSistema-2']}`}
                  >
                    <label htmlFor="ds_Password">Senha</label>
                    <div className={Styles['divInputUsuario']}>
                      <input
                        id="txtSenhaUsuario"
                        name="ds_Password"
                        type="password"
                        className={Styles['input-md-3']}
                        value={formData.ds_Password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={Styles['form-group']}>
                    <div className={Styles['container-select-acess']}>
                      <label>Acesso</label>
                      <select
                        name="ds_Acesso"
                        value={formData.ds_Acesso}
                        onChange={handleChange}
                      >
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
                    <button
                      onClick={handleDelete}
                      disabled={!formData.id}
                      className={Styles.btnExcluir}
                    >
                      <i class="bx  bx-trash"></i>
                      <span>Excluir</span>
                    </button>
                  </div>
                  <div className={Styles['space']}></div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'pesquisa' && (
            <div
              id="tab-pesq"
              className={`${Styles['container-form']} ${
                activeTab === 'pesquisa' ? Styles['active'] : ''
              }`}
            >
              <div style={{ height: '64vh', width: '100%' }}>
                <DataGrid
                  rows={employees}
                  columns={columns}
                  onRowDoubleClick={doubleClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Employess;
