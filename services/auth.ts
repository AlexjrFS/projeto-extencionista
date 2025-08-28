import axios from 'axios';
const API_URL = 'http://localhost:38000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

interface LoginResponse{
  message: string;
  user: {
    id: string;
    username: string;
  };
}

interface ForgotPasswordResponse{
  message: string;
}

export const authService ={
  async login(user: string, password: string): Promise<LoginResponse>{
    try{
      console.log('Tentando login com:', { user, password: '***' });
      console.log('URL da requisição:', `${API_URL}/gula/user/login`);
      console.log('Headers:', axios.defaults.headers);
      
      const response = await axios.post(`${API_URL}/gula/user/login`,{
        user,
        password
      });
      console.log('Resposta do servidor:', response.data);

      // Como o servidor não retorna token, vamos criar um token baseado no ID do usuário
      // ou usar uma sessão baseada em cookie
      if(response.data.user && response.data.user.id){
        // Salva os dados do usuário
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Cria um token simples baseado no ID do usuário (temporário)
        const simpleToken = `user_${response.data.user.id}_${Date.now()}`;
        localStorage.setItem('token', simpleToken);
        
        // Salva em um cookie com configurações adequadas
        document.cookie = `token=${simpleToken}; path=/; max-age=86400; SameSite=Lax`;
        
        // Configura o header de autorização
        axios.defaults.headers.common['Authorization'] = `Bearer ${simpleToken}`;
        
        console.log('Dados do usuário salvos com sucesso');
      }
      return response.data;
    }
     catch(error: any){
      console.error('Erro completo:', error);
      if(error.response){
        console.error('Dados do erro:', error.response.data);
        throw new Error(error.response.data.message || 'Erro na autenticação');
      }
      throw new Error('Erro ao conectar com o servidor');
    }
  },
  async forgotPassword(user: string): Promise<ForgotPasswordResponse>{
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { user });
    return response.data;
  },
  getCurrentUser(){
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  },
  getToken(){
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  },
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    delete axios.defaults.headers.common['Authorization'];
  }
}; 