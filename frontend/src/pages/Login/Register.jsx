import React, { useState } from 'react';
import Styles from './Register.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { showAlert } from '../../components/PresentMessage';
import 'animate.css';

const Register = () => {
  const [searchParams] = useSearchParams();
  const plano = searchParams.get('plano');

  const baseUrl = 'http://localhost:5088/api/clinic';
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('');

  const [termosAceitos, setTermosAceitos] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    corporateName: '',
    personType: '',
    user_email: '',
    user_fullName: '',
    user_cpf: '',
    user_rg: '',
    user_personType: '',
    user_password: '',
    user_confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === 'cnpj') newValue = formatCNPJ(value);
    if (name === 'user_cpf') newValue = formatCPF(value);
    if (name === 'user_rg') newValue = formatRG(value);

    if (name.startsWith('user_')) {
      const field = name.replace('user_', '');
      setFormData((prev) => ({
        ...prev,
        [name]: newValue, // campo formatado
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  };

  // Formatadores
  const formatCNPJ = (value) => {
    return value
      .replace(/\D/g, '') // Remove não-dígitos
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);
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

  // Remove máscaras antes de enviar para API
  const unmask = (value) => value.replace(/\D/g, '');

  const formSubmit = async (e) => {
    e.preventDefault();

    // Verifica se algum campo está vazio
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        showAlert({
          icon: 'warning',
          title: 'Campos obrigatórios',
          text: 'Preencha todos os campos antes de continuar.',
        });
        return;
      }
    }

    if (!termosAceitos) {
      showAlert({
        icon: 'warning',
        title: 'Atenção',
        text: 'Você precisa aceitar os termos de uso para continuar.',
      });
      return;
    }

    // Validação da senha e confirmação
    if (formData.user_password !== formData.user_confirmPassword) {
      showAlert({
        icon: 'error',
        title: 'Erro de validação',
        text: 'As senhas não coincidem.',
      });
      return;
    }

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Cnpj: unmask(formData.cnpj),
          CorporateName: formData.corporateName,
          PersonType: formData.personType,
          AcceptedTerms: termosAceitos,
          PlanType: plano,
          Users: [
            {
              Email: formData.user_email,
              FullName: formData.user_fullName,
              Cpf: unmask(formData.user_cpf),
              Rg: unmask(formData.user_rg),
              PersonType: formData.user_personType,
              Password: formData.user_password,
              ConfirmPassword: formData.user_confirmPassword,
            },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data != null && data != '') {
          showAlert({
            icon: 'success',
            title: 'Cadastro realizado!',
            text: 'Seu registro foi salvo com sucesso.',
            onConfirm: () => {
              setAnimationClass('animate__fadeOut');
              setTimeout(() => {
                setFormData({
                  name: '',
                  cnpj: '',
                  corporateName: '',
                  personType: '',
                  user_email: '',
                  user_fullName: '',
                  user_cpf: '',
                  user_rg: '',
                  user_personType: '',
                  user_password: '',
                  user_confirmPassword: '',
                });
                navigate('/login');
              }, 1000);
            },
          });
        }
      } else {
        const errorText = await response.text();
        console.error('Erro no cadastro:', errorText);
        showAlert({
          icon: 'error',
          title: 'Erro ao cadastrar',
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

  return (
    <section
      className={`${Styles.register} animate__animated ${animationClass}`}
    >
      <div className={Styles['container-form']}>
        <div className={Styles['register-contents']}>
          <h2>Criar nova clínica</h2>
          <p>Plano Selecionado: {plano}</p>
          <div className={Styles['form-register']}>
            <form onSubmit={formSubmit} className={Styles['form']}>
              <div className={Styles['form-horizontal']}>
                <span>Dados da clínica</span>
                <hr></hr>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="name">Nome</label>
                    <input
                      id="txtNomeClinica"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={Styles['container-select']}>
                    <label>Tipo:</label>
                    <select
                      value={formData.personType}
                      name="personType"
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="PF">Física</option>
                      <option value="PJ">Jurídica</option>
                    </select>
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="cnpj">CNPJ</label>
                    <input
                      id="txtCnpj"
                      type="text"
                      value={formData.cnpj}
                      name="cnpj"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="corporateName">Razão Social</label>
                    <input
                      id="txtRazaoSocial"
                      type="text"
                      name="corporateName"
                      value={formData.corporateName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <span className={Styles['title-decoration']}>
                  Dados do usuário administrador
                </span>
                <hr></hr>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="user_email">E-mail</label>
                    <input
                      id="txtEmail"
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="user_fullName">Nome Completo</label>
                    <input
                      id="txtNomeAdm"
                      type="text"
                      name="user_fullName"
                      value={formData.user_fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div className={Styles['field-rg']}>
                    <label htmlFor="user_rg">RG</label>
                    <input
                      id="txtRg"
                      type="text"
                      name="user_rg"
                      value={formData.user_rg}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={Styles['field-cpf']}>
                    <label htmlFor="user_cpf">CPF</label>
                    <input
                      id="txtCpf"
                      type="text"
                      name="user_cpf"
                      value={formData.user_cpf}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={Styles['container-select']}>
                    <label>Tipo:</label>
                    <select
                      value={formData.user_personType}
                      name="user_personType"
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="PF">Física</option>
                      <option value="PJ">Jurídica</option>
                    </select>
                  </div>
                </div>
                <div className={Styles['form-group']}>
                  <div>
                    <label htmlFor="user_password">Senha</label>
                    <input
                      id="txtSenha"
                      type="password"
                      name="user_password"
                      value={formData.user_password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="user_confirmPassword">
                      Confirme a Senha
                    </label>
                    <input
                      id="txtSenhaConfirma"
                      type="password"
                      name="user_confirmPassword"
                      value={formData.user_confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={Styles['container-chk']}>
                  <input
                    id="chkTermos"
                    type="checkbox"
                    name="chkTermo"
                    checked={termosAceitos}
                    onChange={(e) => setTermosAceitos(e.target.checked)}
                  />
                  <label htmlFor="chkTermo">
                    Li e concordo com os termos de uso do software
                    <a href="/">Ler os termos de uso</a>
                  </label>
                </div>
                <div className={Styles['container-btn']}>
                  <button type="submit" className={Styles.btnConfirmar}>
                    <span>Confirmar</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
