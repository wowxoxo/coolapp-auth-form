import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import Logo from './assets/logo.svg';
import { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock logic for 3 outcomes
    if (email === 'wrong@example.com') {
      setError('Incorrect email or password');
      setMessage('');
    } else if (email === 'success@example.com') {
      window.location.href = 'coolapp://auth?status=success';
      setError('');
      setMessage('status=success');
    } else if (email === 'limited@example.com') {
      window.location.href = 'coolapp://auth?status=not_enough_rights';
      setError('');
      setMessage('status=not_enough_rights');
    } else {
      setError('Unknown user');
      setMessage('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto w-full bg-white rounded-md">
      <img src={Logo} alt="CoolApp" className="h-12 mb-4 mx-auto" />
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button type="submit" className="w-full">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;