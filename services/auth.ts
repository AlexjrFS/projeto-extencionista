import axios from 'axios';
const API_URL = 'http://localhost:38000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

interface LoginResponse{
  token: string;
  user: {
    id: string;
    name: string;
    user: string;
  };
}

interface ForgotPasswordResponse{
  message: string;
}
export const authService ={
  async login(user: string, password: string): Promise<LoginResponse>{
    try{
      console.log('Tentando login com:', { user, password: '***' });
      console.log('URL da requisição:', `${API_URL}/auth/loginUser`);
      console.log('Headers:', axios.defaults.headers);
      
      const response = await axios.post(`${API_URL}/auth/loginUser`,{
        user,
        password
      });
      console.log('Resposta do servidor:', response.data);

      if(response.data.token){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
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
  }
}; 