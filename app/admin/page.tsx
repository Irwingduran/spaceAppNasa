'use client';

import { useRouter } from 'next/navigation';
import styles from './styles/Login.module.css'; // Asegúrate de que esta ruta sea correcta
import Image from 'next/image'; // Importar el componente Image de Next.js

export default function Login() {
  const router = useRouter();

  const redirectToDashboard = () => {
    router.push('/dashboard'); 
  };

  return (
    <div className={styles.loginContainer}>
      <Image 
        className={styles.logo} 
        src="https://i.postimg.cc/RCD5XWFR/Logo-Secundario.png" // Asegúrate de cambiar esta ruta por la ruta correcta de tu logo
        alt="Logo"
        width={120} // Ajusta el ancho según sea necesario
        height={120} // Ajusta la altura según sea necesario
      />
      <h2 className={styles.loginTitle}>Discover all our tools</h2>
      <button className={styles.loginButton} onClick={redirectToDashboard}>
        Start
      </button>
    </div>
  );
}
