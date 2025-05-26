// src/componentes/Alerta.js
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

/**
 * Exibe um alerta usando SweetAlert2 com React.
 *
 * @param {Object} options
 * @param {'success' | 'error' | 'warning' | 'info' | 'question'} options.icon
 * @param {string} options.title - Título do alerta
 * @param {string | React.ReactNode} [options.text] - Texto ou componente React
 * @param {Function} [options.onConfirm] - Função executada ao clicar em "OK"
 */
export function showAlert({ icon, title, text, onConfirm }) {
  MySwal.fire({
    icon,
    title,
    html: text, // permite texto ou conteúdo React
    confirmButtonText: 'OK',
  }).then((result) => {
    if (result.isConfirmed && typeof onConfirm === 'function') {
      onConfirm();
    }
  });
}
