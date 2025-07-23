export default function LoginForm() {
  return (
    <div>
      <form action="#">
        <label htmlFor="email">Enter your email:</label>
        <input id="email" type="text" />
        <label htmlFor="password">Enter your password:</label>
        <input id="password" type="password" />
      </form>
    </div>
  );
}
